class Journal {
    constructor(public entires: any){
        
    }
    get(){
        console.log(this.entires)
    }
}

let journal = new Journal("hello world")
console.log(journal.entires)
journal.get()