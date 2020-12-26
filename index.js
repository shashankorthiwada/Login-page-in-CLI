var readlineSync = require('readline-sync');
let userName = readlineSync.question("Enter UserName: ");
let password = readlineSync.question('Enter password: ', {hideEchoBack: true});

if(userName === 'shashank' && password==='shashank'){
console.log('Welcome '+userName);
}
else{
  console.log("Invalid username or password");
}
