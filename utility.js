const readline=require('readline-sync');
const fs=require('fs');
const filereded=fs.readFileSync('person.json','utf-8');
const data=JSON.parse(filereded);
let obj=data.personArray;
class AddressBook{
    addInfo=()=>
    {
        let fname=readline.question("Enter first name:");
        let lname=readline.question("Enter last name:");
        let address=readline.question("Enter address:");
        let city=readline.question("Enter city:");
        let state=readline.question("Enter State:");
        let pinCode=readline.question("Enter pin code:")
        let phoneNo=readline.question("Enter phone No:");
        data['personArray'].push(
            {
                FirstName:fname,
                LastName:lname,
                Address:address,
                City:city,
                State:state,
                PinCode:pinCode,
                PhoneNo:phoneNo
            }
        );
        fs.writeFileSync('person.json',JSON.stringify(data));
    }
}
module.exports=new AddressBook();