/**
 * GitHub API helpers and config.
 * Set VITE_GITHUB_USERNAME in .env to load your public repos.
 */
const GITHUB_API = "https://api.github.com";

export const GITHUB_USERNAME =
  import.meta.env.VITE_GITHUB_USERNAME || "Parna324";

/**
 * Fetch public repos for a user, sorted by most recently updated.
 */
export async function fetchUserRepos(username, options = {}) {
  const { perPage = 15, sort = "updated", type = "owner" } = options;
  const url = `${GITHUB_API}/users/${encodeURIComponent(username)}/repos?sort=${sort}&per_page=${perPage}&type=${type}`;
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github.v3+json" },
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error("User not found");
    if (res.status === 403) throw new Error("Rate limit exceeded. Try again later.");
    throw new Error("Failed to load repositories");
  }
  return res.json();
}

/** Common language colors (GitHub-style) for badges */
export const LANGUAGE_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Vue": "#41b883",
  "C#": "#239120",
  Java: "#ed8b00",
  Rust: "#dea584",
  Go: "#00ADD8",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Shell: "#89e051",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

export function getLanguageColor(lang) {
  if (!lang) return "rgb(148, 163, 184)"; // gray-400
  return LANGUAGE_COLORS[lang] || "rgb(148, 163, 184)";
}
