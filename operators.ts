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

    


}