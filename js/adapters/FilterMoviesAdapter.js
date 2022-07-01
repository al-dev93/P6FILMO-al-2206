class FilterMoviesAdapter {
    constructor(Movies, actor) {
        this._Movies = Movies
        this._actor = actor
    }

    async filterByActor() {
        return FilterV2.filterByActor(this._actor, this._Movies)
    }
}
