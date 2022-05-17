// 1. Да се определи коя от съответните команди се съдържа във всеки отделен стринг;
// 2. В съответствие с командата, да се открие съответно името на филма, името на режисьора и датата на създаване;

function movieInfo(input) {
  const movies = [];
  for (const line of input) {
    if (line.includes("addMovie")) {
      const name = line.split("addMovie ")[1];
      movies.push({ name });
    } else if (line.includes("directedBy")) {
      const [name, director] = line.split(" directedBy ");
      const movie = movies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (line.includes("onDate")) {
      const [name, date] = line.split(" onDate ");
      const movie = movies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}
movieInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
