class User {
    constructor({
            type = User.TYPE.TEACHER,
            name = "User",
            id = null,
            email = null,
            phone = null,
        }){
        this.type = type;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }

    static TYPE = {
        STUDENT: "student",
        TEACHER: 'teacher',
        CR: "cr"
    } 

    /**
     * @return {Promise} A promise that resolves when doc is saved successfully
     */
    async save(){
        //add logic to save the document to firestore
    }

    /**
     * @return {Object} The plain User document.
     */
    doc(){
        return {
            name: this.name,
            type: this.type,
            email: this.email,
            phone: this.phone,
            id: this.id
        }
    }
    /**
     * @return {Object} object to be saved to firestore
     */
    toFirestore() {
        return {
            name: this.name,
            type: this.type,
            email: this.email,
            phone: this.phone,
        }
    }
    fromFirestore(snapshot){
        //implement logic to return User object by reading firestore doc
    }
}

module.exports = User;