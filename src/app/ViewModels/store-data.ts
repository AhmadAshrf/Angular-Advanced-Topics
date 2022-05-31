export class StoreData {
    public name:string;
    public imgURL:string;
    public location:string[]
    
    constructor(name:string, img:string, location:string[]){
        this.name = name
        this.imgURL = img
        this.location = location
    }
}
