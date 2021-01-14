console.log("Welcome to Address Book");
const readline=require('readline-sync');
const utility=require('./utility');
let ch;
do {
    console.log("\n1.Add Details:\n","2.Display Details:\n");
    let choice=readline.questionInt('Enter your choice:');
    if(choice==1)
    {
        utility.addInfo();
    }else
    {
        utility.display();
    }
    ch= readline.question('Do you want to continue?(Y):') 
}while (ch=='Y');
