export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-10-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
/** True once a real Sanity project ID is configured. The site builds and runs without it. */
export const sanityConfigured = /^[a-z0-9-]+$/.test(projectId) && projectId !== "your_project_id";
