class MoviesFactory {
    constructor(data, type) {
        switch (type) {
            case 'oldApi':
            // Si le type correspond à l'ancienne API, alors retourne moi l'ancien formattage
                return new OldMovie(data);
                break;
            case 'newApi':
            // Sinon retourne moi le nouveau formattage
                return new Movie(data);
                break;
            case 'externalApi':
            // Sinon retourne moi le formattage externe
                return new ExternalMovie(data);
                break;
            default:
            // Une bonne pratique est de throw une erreur si le format n'est pas reconnu
                throw new Error('Unknown type format');
                break;
        }
    }
}