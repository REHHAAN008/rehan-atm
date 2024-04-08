import inquirer, { PasswordQuestionOptions } from 'inquirer';
import PasswordPrompt from 'inquirer/lib/prompts/password.js';


  let uname1 = ["rehan", "sahar"];
  let pwsd1 = 123;
  let amount1 = 15000;
  let limit1 = 5000;

  let uname2 = "farhan";
  let pwsd2 = 321;
  let amount2 = 20000;
  let limit2 = 2000;

let store:string;
let tryagain;



async function secret1() {

console.log("==============================================")
    console.log("         |REHAN ATM-MACHINE|")

  let checkuname = await inquirer.prompt({
    name: "username",
    message: "Enter Username: "
  });

  let i;
  for ( i = 0; i < uname1.length; i++) {
    
    if (checkuname.username == uname1[i]) {
        store = checkuname.username;
        
      let checkpwsd = await inquirer.prompt({
        name: "password",
        message: "Type Your Password: ",
        
      });

    

      if (checkpwsd.password == pwsd1)
        {
            return true;
        } 
        
        else if(checkpwsd.password != pwsd1)
            {
                pwsdexist()
                return;
            }
  
    }
    }
    if(checkuname.username != uname1[i])
        {
            unameexist()
        }
   
}
async function check1() {
   
    if(await secret1() )
        
    
        {
            console.log("==============================================")
            console.log("        Authentication Sucessfull")
            console.log("    Congrulation! you sucessfully loged-in")
            console.log("  Note: your account limit: 5000 at a time ")
            console.log("==============================================")
            
    //A
    while(true)
        {
            let menu = await inquirer.prompt({
                name:"menu1",
                message:"Select what you want: ",
                type:"list",
                choices:["total","withdraw","deposit","summary + exit"]
            })
    
            if(menu.menu1 == "total")
                {
                    console.log("=================================")
                    console.log("   Total amount is: "+amount1+"$");
                    console.log("=================================")
                   // goto: A
                }
            
                if(menu.menu1 === "withdraw")
                    {
                        console.log("=================================")
                        
                        let withdraw = await inquirer.prompt({
                                    name:"menu2",
                                    message:"select withdraw type: ",
                                    type:"list",
                                    choices:["Manually","5000","back"] //back
                        })
                        if(withdraw.menu2 == "Manually")
                            {
                                console.log("  Note: your account limit: 5000 at a time ")
                                console.log("==============================================")
                                let enterwithdraw = await inquirer.prompt({
                                    name: "manual",
                                    message:"Enter ammount: "
    
                                })
    
                                if((enterwithdraw.manual <=5000) &&(enterwithdraw.manual > 0))
                                    {
                                        console.log("==============================================")
                                        console.log("   Before withdraw: " + amount1 + "$")
                                        console.log("   Sucessfully withdraw: " + enterwithdraw.manual)
                                        console.log("   Total amount is: " + (amount1-parseInt((enterwithdraw.manual))) + "$");
                                        amount1 = (amount1-parseInt((enterwithdraw.manual)))
                                        

                                        if(amount1 < 0){
                                            console.log("==============================================")
                                            console.log("      ******|Insufficient Balance|******")
                                            console.log("==============================================")
                                        }
                                    }
                                    
                                    else{
                                        console.log("************************")
                                        console.log("out of limit")
                                        console.log("************************")
                                    }
                            }
                           else if(withdraw.menu2 == "5000")
                                {
                                    console.log("==============================================")
                                    console.log("   Before withdraw: " + amount1 + "$")
                                    console.log("   Sucessfully withdraw: " + "5000$")
                                    console.log("   Total amount is: " + (amount1-5000) + "$");
                                    amount1 = (amount1-5000)
                                    console.log("==============================================")

                                    if(amount1 < 0){
                                        console.log("==============================================")
                                        console.log("      ******|Insufficient Balance|******")
                                        console.log("==============================================")
                                        return;
                                    }
                                }
                            
                                
                    }

    
                   else if(menu.menu1 === "deposit")
                        {
                            console.log("=============================================")
                            console.log("  Note: your account limit: 5000 at a time ")
                            
                            let withdraw = await inquirer.prompt({
                                        name:"deposit",
                                        message:"Enter amount: ",
                            })
                            if((withdraw.deposit > 0 )&& (withdraw.deposit <=5000))
                                {
                                    console.log("==============================================")
                                    console.log("   Before Despoit Total: " + amount1 + "$")
                                    console.log("   Sucessfully Desposit: " + withdraw.deposit+"$")
                                    console.log("   Total amount is: " + ((amount1)+parseInt((withdraw.deposit))) + "$");
                                    amount1 = ((amount1)+parseInt((withdraw.deposit)))
                                    console.log("==============================================")
                                }
                            else{
                                console.log("=============================================")
                                console.log("out of limit")
                                console.log("=============================================")
                            }                            
                        }
           
                        else if(menu.menu1 == "summary + exit")
                            {
                                console.log("==============================================")
                               console.log("     |           Account Summary")
                               console.log("     | Your account limit: "+limit1)
                               console.log("     | USER-NAME: "+store)
                               console.log("     | Total amount: "+amount1)
                               console.log("     | Note: Dont share your Details also password")
                               console.log("     |  :Thankyou for visiting Rehan-ATM Machine:")
                               return
                            }
                        
            /*else if(menu.menu1 == "exit")
                    {
                       return;
                    }*/
                }
    
            
        }
    

    
       else
{
   return;
    
}
    
}




//let A;
check1()


///////////////////////////////////////////////////////////////
async function unameexist() {
    console.log("==============================================")   
    console.log("              |User not EXIST|")
    console.log("==============================================") 
    
    tryagain = await inquirer.prompt({
        name:"again",
        message:"You want to try anagin:(y/n)"
    })
    if(tryagain.again == "y")
        {
            secret1()
        }
    else if (tryagain.again == "n")
    {
        return;
    }
}
async function pwsdexist() {
    console.log("==============================================")   
    console.log("              |Wrong password|")
    console.log("==============================================") 
    
    tryagain = await inquirer.prompt({
        name:"again",
        message:"You want to try anagin:(y/n)"
    })
    if(tryagain.again == "y")
        {
            secret1()
        }
    else if (tryagain.again == "n")
    {
        return;
    }
}