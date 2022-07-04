class UserContext {
    constructor(){
        this.states = [
            new AnonymousUserState(),
            new UserConnectedState()
        ]
        this.currentState = this.getInitialState()
    }

    getInitialState() {
        const user = new User()
        // const [AnonymousUserState, UserConnectedState] = this.states
        if(!user.user){
            return this.states[0] // ou bien AnonymousUserState 
        }
        else {
            return this.states[1] // ou bien UserConnectedState]
        }
    }

    change(firstName, lastName) {
        const user = new User({
            firstName,
            lastName
        })
        this.currentState = this.states[1]
    }
}