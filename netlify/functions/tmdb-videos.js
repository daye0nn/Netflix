export async function handler(event) {
  const { movieId } = event.queryStringParameters;
  const API_KEY = process.env.TMDB_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=ko-KR`
  );
  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
