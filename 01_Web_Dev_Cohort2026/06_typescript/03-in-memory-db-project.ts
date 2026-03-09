// In memory DB
// like a hashmap
// that do - find user, delete user, store user

type UserID = string

interface User {
    // id: string     
    id: UserID   //UserID --> custom type
    fname: string
    lname?: string
    email: string
    contact: {
        mobile: string
    }
    address: {
        street: number
        pin: number
        country: string
    }

}

class InventoryDB {
    private _db: Map<string, User>
    // private _db: Map<UserID, User> //UserID --> custom type
    // private _db: Map<User['id'], User> //User['id'] --> whatever type of id is inside User, pick that up(not good practice)
    constructor() {
        this._db = new Map()
    }


    // #region Promise-based user insertion
    // promise function + typescript
    // public async insertUser(data: User) : Promise<UserID>{ // Promise<UserID> --> function return promise and when it resolves it basically return userID. It needs to be async to be a Promise
    //     if(this._db.has(data.id)){
    //         throw new Error(`User with ID ${data.id} already exists`)
    //     }
    //     this._db.set(data.id, data)
    //     return data.id
    // }
    // #endregion

    public insertUser(data: User): UserID {    // note : everything is JS if you just remove type here + public/private keyword 
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`)
        }
        this._db.set(data.id, data)
        return data.id
    }

}

const myDb = new InventoryDB()
myDb.insertUser({    // if insertUser function was private then you could not access it here.
    id: "1",
    fname: "sam",
    email: "@gmail",
    address: {
        street: 54,
        pin: 110032,
        country: "India",
    },
    contact: {
        mobile: "8909"
    }
})

// Note:-
// private keyword is a part of ts, it is used for encapsulation (protecting data inside objects)
// - <> --> generic
// - interface - to declare many data type - usually written with capital letter/pascal case ---> interface will used as custom type

//  Private and Public
// - private and public are OOP concepts
// - In Object-Oriented Programming, classes can control who can access their properties and methods.
// - This is called encapsulation.
// - In TypeScript methods are public by default.