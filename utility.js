const person=require('./person');
const readline=require('readline-sync');
const fs=require('fs');
class AddressBook{
    person1={};
    addInfo=()=>
    {
        let firstName=readline.question("Enter first name:");
        this.person1["FirstName"]=firstName;
        let lastName=readline.question("Enter last name:");
        this.person1["LastName"]=lastName;
        let address=readline.question("Enter address:");
        this.person1["Address"]=address;
        let city=readline.question("Enter city:");
        this.person1["City"]=city;
        let zip=readline.question("Enter Zip Code:");
        this.person1["Zip"]=zip;
        let monNo=readline.question("Enter mobile No:");
        this.person1["MobileNo"]=monNo;
        let data = JSON.stringify(this.person1);
        fs.writeFileSync('person.json', data);
        console.log(person);
    }
    
}
module.exports=new AddressBook();