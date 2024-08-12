let person = {
	name: "Jack",
	age: 39,
	city: "New York"
}

person.email = "jackomlli@git.com";

function hasKey(object, key){
	
if ( object[key] == undefined){
	return false;
}else{
	return true;
}
}
// hasKey(person, "name")
console.log(hasKey(person,"name"))
console.log(hasKey(person,"hobby"))

const movies = [
	{
	  title: "The Shawshank Redemption",
	  director: "Frank Darabont",
	  year: 1994,
	  genre: "Drama",
	},
	{
	  title: "The Godfather",
	  director: "Francis Ford Coppola",
	  year: 1972,
	  genre: "Crime",
	},
	{
	  title: "Pulp Fiction",
	  director: "Quentin Tarantino",
	  year: 1994,
	  genre: "Crime",
	},
	{
	  title: "The Dark Knight",
	  director: "Christopher Nolan",
	  year: 2008,
	  genre: "Action",
	},
	{
	  title: "Forrest Gump",
	  director: "Robert Zemeckis",
	  year: 1994,
	  genre: "Drama",
	},
  ];
  
  function moviesList (movies){
	movies.forEach(movie => {
		console.log(movie.title)
	});
  }

  moviesList(movies);

  

  function moviesIn1994(movies){
	let count = 0;
	movies.forEach((movie)=>{
		if (movie["year"] == 1994){
			count += 1;
		}
	});
	return count;
  }


  console.log(moviesIn1994(movies))

  function updateDarkKnight(movies){
     movies.find((movie)=>movie.title == "The Dark Knight").genre = "Action/Drama";
	 return movies;
  }

 // console.log(updateDarkKnight(movies))

//   function groupMoviesByGenre(movies){

// 	let moviesByGenre = {
// 		drama :  movies.filter((movie)=> {
// 			if(movie.genre == "Drama"){
// 				return movie;
// 			}
// 		}).map((movie)=>movie.title),
// 		crime : movies.filter((movie)=>  {
// 			if(movie.genre == "Crime"){
// 				return movie;
// 			}
// 		}).map((movie)=>movie.title),
// 		action : movies.filter((movie)=>  {
// 			if(movie.genre == "Action"){
// 				return movie;
// 			}
// 		}).map((movie)=>movie.title)
// 	}

// 	return moviesByGenre;
//   }

function groupMoviesByGenre(movies){

	let moviesByGenre = {
		drama :  movies.filter((movie)=> movie.genre == "Drama" ? movie:false).map((movie)=>movie.title),
		crime :  movies.filter((movie)=> movie.genre == "Crime" ? movie:false).map((movie)=>movie.title),
		action :  movies.filter((movie)=> movie.genre == "Action" ? movie:false).map((movie)=>movie.title),
	}
	return moviesByGenre;
  }

  console.log(groupMoviesByGenre(movies))