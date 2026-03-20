import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERT = `
precision highp float;
attribute vec3 position;
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

// Simple but eye‑catching animated laser / flow background
const FRAG = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uFade;

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;

  // Center and fix aspect
  uv = uv * 2.0 - 1.0;
  uv.x *= iResolution.x / iResolution.y;

  float t = iTime * 0.5;

  // Rotate space slowly
  float angle = t * 0.4;
  mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  vec2 p = rot * uv;

  // Layered flowing waves
  float wave1 = sin(p.y * 6.0 + t * 4.0) * 0.25;
  float wave2 = sin(p.y * 11.0 - t * 3.0) * 0.18;
  float wave = wave1 + wave2;

  float dist = abs(p.x + wave);

  // Core beam mask
  float mask = smoothstep(0.22, 0.0, dist);

  // Glowing falloff
  float glow = 0.0;
  glow += 0.09 / (dist + 0.02);
  glow += 0.07 / (length(p + vec2(0.3, 0.4)) + 0.18);
  glow += 0.07 / (length(p + vec2(-0.4, -0.3)) + 0.2);

  vec3 baseColor = normalize(uColor) * 0.9;
  vec3 col = mix(vec3(0.0), baseColor, mask);
  col += glow * baseColor;

  // Subtle vignette
  float vignette = smoothstep(1.4, 0.6, length(uv));
  col *= vignette;

  col *= uFade;

  float alpha = clamp(mask + glow * 0.4, 0.0, 1.0);
  alpha = mix(0.0, alpha, 0.85);

  gl_FragColor = vec4(col, alpha);
}
`;

export default function LaserFlow({ color = "#3B82F6" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
        3,
      ),
    );

    const uniforms = {
      iTime: { value: 0 },
      iResolution: {
        value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1),
      },
      uColor: { value: new THREE.Color(color) },
      uFade: { value: 1 },
    };

    const material = new THREE.RawShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.iResolution.value.set(
        window.innerWidth,
        window.innerHeight,
        1,
      );
    };

    window.addEventListener("resize", onResize);

    const animate = () => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [color]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 h-screen w-screen"
    />
  );
}
