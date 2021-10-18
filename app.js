class app {
    addPlace (){
    event.preventDefault();
    let kind = document.querySelector("select[name='properties']").value
    let address = document.querySelector("input[name='address']").value
    let rented = document.querySelector("input[name='rented']").checked
    let property = new Place(kind, address, rented)
    this.addPlaceinList (property)
    this.clearForm
    }

    addPlaceinList (property){
        let listPlaceItem = document.createElement("li")
        let listPlaceItem_info = `${property.kind} | ${property.address}`
        if (property.rented) {
            let rentedTag = 
        }

    }

    removePlace (){

    }
    clearForm (){}
}