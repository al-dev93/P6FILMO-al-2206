class Search {
    constructor(Movies){
        this.Movies = Movies
    }

    search(query) {
        return filterMovies(query)
    }
}


class MovieNameSearch extends Search {
    constructor(Movies){
        super(Movies)
    }
    
    filterMovies(query){
        return this.Movies.filter(movie => movie.title.toLowerCase.includes(query.toLowerCase()))
    }
}


class ActorNameSearch extends Search {
    constructor(Movies){
        super(Movies)
    }

    filterMovies(query){
        
        return this.Movies.filter(movie => movie.actor.toLowerCase.includes(query.toLowerCase()))
    }
}