//Booleans


let authorized: boolean ;

authorized = false;

authorized  = null;

authorized = undefined;

authorized = true;

authorized = (() => true) ();

authorized =(() => false) ();

{//number
    let myNumber :number;
    myNumber  = 10;
    myNumber = -10;
    myNumber = 10.10;
    myNumber  = -10.10;
    myNumber = 0b101010;
    myNumber  = 0x123;
    myNumber = null;
    myNumber = undefined;
    myNumber = (() => 0o123)();

    //string
    let username:string;
    username = "rohit nagappa";
    username = 'rohit';

    username = `rohit`.toUpperCase();
    username = null;
    username = undefined;
    username = (() => `rohit nagappa`)();


    //null
    let data:null;
    data = null;
    data = undefined;
    data = (()=> null)();
    data = (() => undefined)();

    //undefined
    let userData : undefined;

    userData = undefined;
    userData  = (() => undefined)();
    userData = null;
    userData = (()=> null)();
    

}
