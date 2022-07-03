class WishListSubject {
    constructor(){
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter( obs => obs !== observer)
    }

    fire(operation) {
        this.observers.forEach(obs => obs.addToWishList(operation))
    }
}
