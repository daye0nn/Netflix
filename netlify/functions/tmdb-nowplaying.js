export async function handler() {
  const API_KEY = process.env.TMDB_KEY;

  // TMDB API 호출
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
  );
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
