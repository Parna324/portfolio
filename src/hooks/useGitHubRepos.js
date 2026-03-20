import { useState, useEffect, useCallback } from "react";
import { fetchUserRepos } from "../lib/github";

/**
 * Fetches and returns public GitHub repos for the given username.
 * @param {string} username - GitHub username
 * @returns {{ repos: array, loading: boolean, error: Error | null, retry: function }}
 */
export function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(!!username?.trim());
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    if (!username?.trim()) {
      setRepos([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserRepos(username, { perPage: 18 });
      // Exclude forks and optionally the portfolio repo for a cleaner list
      const filtered = data.filter((r) => !r.fork);
      setRepos(filtered);
    } catch (err) {
      if (err.message.includes("Rate limit")) {
        // Provide mock data if hit by Github rate limiting so the portfolio doesn't break
        setRepos([
          {
            id: 'mock-1',
            name: "Heritage-of-India",
            html_url: "https://github.com/Parna324/Heritage-of-India",
            homepage: "https://indian-culture.vercel.app",
            language: "JavaScript",
            stargazers_count: 5,
            forks_count: 1,
            topics: ["react", "tailwindcss", "framer-motion"],
          },
          {
            id: 'mock-2',
            name: "virtual-bartender",
            html_url: "https://github.com/Parna324/virtual-bartender",
            homepage: "https://virtual-bartender.vercel.app",
            language: "TypeScript",
            stargazers_count: 3,
            forks_count: 0,
            topics: ["nextjs", "ai", "openai"],
          },
          {
            id: 'mock-3',
            name: "stay-scouter",
            html_url: "https://github.com/Parna324/stay-scouter",
            language: "JavaScript",
            stargazers_count: 2,
            forks_count: 1,
            topics: ["booking", "frontend"],
          }
        ]);
        setError(null); // Clear error since we handled it gracefully
      } else {
        setError(err);
        setRepos([]);
      }
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    load();
  }, [load]);

  return { repos, loading, error, retry: load };
}
