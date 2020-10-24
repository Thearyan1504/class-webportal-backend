/**
 * @interface
 */
class Model {

    constructor({
        property = "defaultValue",
        id = null
    }){
        this.property = property
        this.id = id;
    }
    /**
     * @return {Promise} A promise that resolves when doc saved successfully
     */
    async save(){
        //add logic to save the document to firestore
    }

    /**
     * @return {Object} The plain User document.
     */
    doc(){
        //include every property here 
        return {
            property: this.property,
            id: this.id
        };
    }

    /**
     * @return {Object} object to be saved to firestore
     */
    toFirestore() {
        //same as doc() but exclude id here.
        return {
            property: this.property
        };
    }

    fromFirestore(snapshot){
        //implement logic to return User object by reading firestore doc
    }
}

module.exports = Model;