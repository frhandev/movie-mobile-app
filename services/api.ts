export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzA5NWNlNjdjNDFhNmFmYjgwNWFiZGQ2NDU3OThkNiIsIm5iZiI6MTcyMzAxOTE2Ny42NTc5OTk4LCJzdWIiOiI2NmIzMmY5ZjA5MmU3Y2M1OWZmYzdkMDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bXmS9-jS3D0UUWqEf3mPA45iAxGVIThFF_PHkt8M0OY",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzA5NWNlNjdjNDFhNmFmYjgwNWFiZGQ2NDU3OThkNiIsIm5iZiI6MTcyMzAxOTE2Ny42NTc5OTk4LCJzdWIiOiI2NmIzMmY5ZjA5MmU3Y2M1OWZmYzdkMDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bXmS9-jS3D0UUWqEf3mPA45iAxGVIThFF_PHkt8M0OY`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movies?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();

  return data.results;
};
