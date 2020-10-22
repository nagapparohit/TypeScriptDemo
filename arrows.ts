function greetUser(name:string){
    console.log(`welcome , ${name}`);
}

const greetUserByName = function (name:string){
    console.log(`welcome , ${name}`);
}

greetUser('rohit');
greetUserByName('nagappa');


const greetUserByNameArrow = (name:string) => console.log(`welcome , ${name}`);

greetUserByNameArrow('don');

const edibles = [
    {
        edible:'pizza',
        isVegan:true
    },
    {
        edible:'burger',
        isVegan:true
    },
    {
        edible:'chicken pizza',
        isVegan:false
    },
    {
        edible:'chicken burger',
        isVegan:false
    },
    {
        edible:'tomato juice',
        isVegan:true
    }
];

console.log(edibles.filter(function(item){
    return item.isVegan;
}));

console.log(edibles.filter((item) => item.isVegan));

const user1 = {
    firstname : `john`,
    lastname : `don`,
    lazygreet : function(){
        const that = this;
        setTimeout( function(){
            console.log(`hey there , ${that.firstname}`);
        },1000
        );
    }
};

const user2 = {
    firstname : `rohit`,
    lastname : `don`,
    lazygreet : function(){
        setTimeout( () => console.log(`hey there , ${this.firstname}`),1000);
    }
};


user1.lazygreet();
user2.lazygreet();



