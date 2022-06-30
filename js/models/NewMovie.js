class NewMovie extends Movie {
    constructor(data) {
        super(data)
        this._duration = data.duration
        this._title = (data.title.fr === undefined)? data.title.en : data.title.fr
    }

    get duration() {
        let minutes = this._duration % 60;
        let hours = (this._duration - minutes)/60;
        return `${hours}h ${minutes}mn`;
    }

}