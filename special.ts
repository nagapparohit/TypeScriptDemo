//void


function logToConsole():void {
    console.log("Hello world!!");
    return;
}


//Array
{
    let fruits : string[];
    fruits = [`apple`,'orange',"grapes".toUpperCase(),(()=> "bananda")()],null,undefined;

    let food : Array<string>;

    food = ['pizza','burger'];

    let genericArray: Array<string | number | boolean >;
    genericArray = [ 'pizza','burger',122,true,false,0b10101,null, undefined]

    //tuple

    let coordinates:[number,number,number];
    coordinates = [12,3,4];

    let genTuple : [number , string, boolean];
    genTuple = [12,`rohit`,true];

    //objects
    let user = {
        firstName : 'sidd',
        lastname : 'ajmera',
        username : 'sideajmeraa',
        getUsername: () : string => this.username
    };

    //enum
    enum daysOfTheWeek {
            MONDAY = 'monday',
            TUESDAY = 'tuesday',
            WEDNESDAY = ' wednesday'

    };

    let today : daysOfTheWeek;

    today = daysOfTheWeek.MONDAY;
    today = daysOfTheWeek.TUESDAY;

    //any

    let authorizedUser:any = {
        firstName  : 'roht',
        lastname : 'nagapps',
        username : 'rohitnagappa'
    };

    

}