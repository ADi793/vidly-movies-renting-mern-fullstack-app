import http from "./httpService";

const apiEndPoint = "/movies";

function movieUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndPoint, movie);
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
