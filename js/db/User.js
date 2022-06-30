class User {
    constructor(login) {
        if(User.exist) {
            return User.intance
        }
        else if (login && login.firstName && login.lastName) {
            this._firstName = login.firstName
            this._lastName = login.lastName

            this.saveToLocalStorage()

            User.intance = this
            User.exist = true

            return this
        }
    }


    get firstName(){
        return this._firstName
    }

    get lastName(){
        return this._lastName
    }

    get user(){
        const firstName = this._firstName || localStorage.getItem('firstName')
        const lastName = this._lastName || localStorage.getItem('lastName')

        if(!firstName && !lastName){
            return null
        }

        if(firstName && lastName){
            const user = new User({firstName, lastName})
        }

        return {
            firstName : firstName,
            lastName : lastName
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('firstName', this._firstName)
        localStorage.setItem('lastName', this._lastName)
    }
}
