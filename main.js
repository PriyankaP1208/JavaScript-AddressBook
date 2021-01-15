console.log("Welcome to Address Book");
const readline=require('readline-sync');
const utility=require('./utility');
let ch;
do {
    console.log("\n1.Add Details:\n","2.Display Details:\n","3.Delete data\n",
                "4.Update data\n","5.Search data\n","6.Sort data");
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
    else if(choice==4)
    {
        utility.updateData();
    }
    else if(choice==5)
    {
        utility.searchData();
    }
    else
    {
        utility.sordData();
    }
    ch= readline.question('Do you want to continue?(Y):') 
}while (ch=='Y');
