// Array
{
    let fruits : Array <string> = ['apple','grape','mango'];

    let food: string[] = ['pizza','burgger'];

    let edibles : Array<string> = [...fruits,...food];

    console.log(edibles);

    // object

    let user = {
        firstName : 'rohit',
        lastname : 'nagappa',
        username : 'rohitnagappa'
    };

    let userDetails = {
        ...user,
        address : '123 East ',
        email : 'nag@gmail.com'
    };

    console.log('got the user as : ',userDetails);

    //functions
    function add(x ?:number,y?:number,z?:number) : number{
        return x+y+z;
    }

    let numbers : Array<number> = [1,2,3];

    console.log("got the sum of all the numbers : ",add (...numbers) );


    //backticks
    console.log('the user with name : '
                +  user.firstName 
                + ' has an address of '
                +userDetails.address 
                + ' and email is '
               +userDetails.email);

    console.log(`The user with name : ${user.firstName} has an address of ${userDetails.address} and an email of ${userDetails.email}`);

    console.log(`Got the userdetial ${userDetails}`);

    console.log(`Got the userdetial `,userDetails);

    //destructure
    let { firstName :fName, lastname : lName} = user;
    console.log(fName);
    console.log(lName);

    //array desturcture

    let [ apple , mango ] = fruits;
    console.log(apple);
    console.log(mango);

    //Rest parameter
    let [jsutApple , ...restEdibles] = edibles;

    console.log("just apple : ",jsutApple);
    console.log("rest of edibles : ",restEdibles);

    let {firstName , ...restUserDetials} = userDetails;

    console.log("first name is :",firstName);
    console.log(" rest user props :",restUserDetials);

    function  getEdibles(apple ?,...restEdibles){
        console.log("in function",apple);
        console.log("in function",restEdibles);
    }

    getEdibles(...edibles);



}