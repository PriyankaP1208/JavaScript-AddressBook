console.log("Welcome to Address Book");
const readline=require('readline-sync');
const utility=require('./utility');
let ch;
do {
    console.log("\n1.Add Details:\n","2.Display Details:\n","3.Delete data\n","4.Update data");
    let choice=readline.questionInt('Enter your choice:');
    if(choice==1)
    {
        utility.addInfo();
    }else if(choice==2)
    {
        utility.display();
    }
    else if(choice==3)
    {
        utility.deleteData();
    }
    else
    {
        utility.updateData();
    }
    ch= readline.question('Do you want to continue?(Y):') 
}while (ch=='Y');
