class Movie {
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
        this.movieList = $('#movies');
        this.appendToDiv();
    }

    appendToDiv() {
        // function will add append elements to the dom
        // using jQuery
        if(this.rating < 0 || this.rating > 10) {
            return alert(`Please enter a rating between 0 and 10`)
        }
        if(this.title.length <= 2) {
            return alert(`Please enter more characters in your title`)
        }
        let newMovie = $(`<p>Title: ${this.title}<br> 
        Rating: ${this.rating} </p>`);
        let button = $('<button>Remove</button>');
        button.on('click', function(e) {
            e.target.closest('p').remove();
        });
        newMovie.append(button);
        this.movieList.append(newMovie);
    }
}

$(function() {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        new Movie($('#title').get([0]).value, $('#rating').get([0]).value);
    });
})

