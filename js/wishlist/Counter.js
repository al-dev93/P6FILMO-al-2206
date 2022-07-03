class WishListCounter {
    constructor(){
        this.counter = 0
    }

    addToWishList(operation) {
        if(operation === 'increase') {
            this.counter++
        } else if (operation === 'decrease' && this.counter > 0) {
            this.counter--
        }
        const $wishListCounter = document.querySelector('.wish-count')
        $wishListCounter.textContent = this.counter
    }
}