interface Human{
    readonly age:number;
    walk():void;
}

interface PersonI extends  Human {
    fname:string;
    lname ?:string;
}

//for objects
const user : PersonI = {
    fname : ``,
    age : 10,
    walk:() =>{
        return ;
    }
};

//for classes

class EmployeeC implements  PersonI{
    fname: string;
    age: number;
    walk(): void {
        throw new Error("Method not implemented.");
    }
}
