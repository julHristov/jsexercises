function objectDemo(arr) {
  const movies = [];
  for (const iterator of arr) {
    if (iterator.includes("addMovie")) {
      const name = iterator.split("addMovie ")[1];
      movies.push({ name });
    } else if (iterator.includes("directedBy")) {
      const [name, director] = iterator.split(" directedBy ");
      const movie = movies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movies.director = director;
      }
    } else if (iterator.includes("onDate")) {
      const [name, date] = iterator.split(" onDate ");
      const movie = movies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movies.date = date;
      }
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
    }
  });
}
objectDemo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
