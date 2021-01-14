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
    display=()=>
    {
        let obj={};
        obj=data;
        console.log("Data is:")
        console.log(obj['personArray']);
    }
    deleteData=()=>
    {
        let name = readline.question('enter name to delete:');
        let index=obj.map(function(item){return item.FirstName}).indexOf(name);
        obj.splice(index,1);
        fs.writeFileSync('person.json',JSON.stringify(data));
        console.log(data);
    }
    updateData=()=>
    {
        let name= readline.question('Enter name to update:');
        let name1 = readline.question('enter what to update:1.First Name 2.Last Name'
                                        +'3. Address 4.City 5.State 6.PinCode 7.PhoneNo:');
        let temp=readline.question('Enter what to update:');
        obj.forEach((personArray) => 
        {
            if(personArray.FirstName==name)
            {
                if(name1==1) 
                {
                    personArray.FirstName = temp;
                }
                else if(name1==2)
                {
                    personArray.LastName=temp;
                }
                else if(name1==3)
                {
                    personArray.Address=temp;
                }
                else if(name1==4)
                {
                    personArray.City=temp;
                }
                else if(name1==5)
                {
                    personArray.State=temp;
                }
                else if(name1==6)
                {
                    personArray.PinCode=temp;
                }
                else
                {
                    personArray.PhoneNo=temp;
                }
            }
            fs.writeFileSync('person.json',JSON.stringify(data));
        });
        console.log(data);
    }
    searchData=()=>
    {
        let name=readline.question('enter name to search:');
        console.log(obj.filter(item=>item.FirstName==name));
        //console.log(obj);
    }
}
module.exports=new AddressBook();