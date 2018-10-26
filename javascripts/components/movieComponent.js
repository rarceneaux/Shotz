const movieDescription = (arrayOfDescriptions) => {
    let domString = "";
    arrayOfDescriptions.forEach((description) => {
        domString += `div class="movieInfo">
        <p class="title">${movie.movieTitle}</p>
        <p class="genre">${movie.genre}</p>
        <p class="release">${movie.estimatedReleaseDate}</p>
        <p class="description">${movie.movieDescription}</p>
        </div>`
    });

$("#movieInfo").append(domString);

}

$.get('../db/movie.json')
    .done((data) =>{
        console.log(data);
     movieDescription(data.movies);  
    })

.fail((error) => {
    console.error(error);
});

export {movieDescription};