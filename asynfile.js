const f = require("fs")
const input = require('readline-sync')
if (f.existsSync('AsyncfileS.txt')){
    console.log(`1. signUp\n2. login\n3. Exixt`);
    let a=input.questionInt("Enter your option :")
    if(a===1){
        let name = input.question('Apna name dale : ')
        let email = input.question('Apna email id dale : ')

        f.readFile('AsyncfileS.txt', 'utf-8',(err,data)=>{
            if(err) throw err;
            if (data.includes(email)) {
                console.log('you hava already signUP.');
        
            } else {
                let password = input.question('Apna Password dale : ')
                let a = f.appendFile('AsyncfileS.txt', `${name},${email},${password}\n`,(err)=>{
                    if(err) throw err;
                })
                console.log('signUP successfully .');
            }
        })
    }
    else if(a===2){
        f.readFile('AsyncfileS.txt','utf-8',(err,data)=>{
            if(err) throw err;
            let email = input.question('Apna email id dale : ')
            let password = input.question('Apna Password dale : ')
            if (data.includes(email)&& (data.includes(password))) {      // check (p.txt) me email, password hai ya nahi .
                console.log('login succesfully.');
            }
            else{
                console.log(`Invaild .please check Email and Password .`);
            }
        })
    }
    else{
        console.log('you are going out of your page.')
    }
}
else{
    f.writeFile('AsyncfileS.txt','',(err)=>{
        if(err) throw err;
    })
}