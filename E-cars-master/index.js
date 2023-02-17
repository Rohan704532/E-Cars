//question 1                                            <------
//let input = prompt("Please enter any password");
//if (input.length<8){
//    console.log("Not acceptable");
//}else{
//    console.log("Acceptable");
//}

//question 2                                            <------
//let input = prompt("Please enter your sentence");
//if(input.length>10 && input.length<30){
//    console.log("Thanks! Here is your 15% discount");
//}else if(input.length>=30) {
//    console.log("We really appreciate your feedback! Here is your 30% discount");
//}
//else{
//    console.log("Hope to see you again!");
//}

//question 3                                            <------
//let flavour = prompt("Please enter the flavour which you like");
//let nu = parseInt(prompt("Please enter the number of peoples"));
//switch(flavour){
//    case "Chocolate" :
//        console.log("Chocolate Dream");
//        break;
//    case "Berries or fruits":
//        console.log("Tropic Pleasure");
//        break;
//    case "Nuts":
//        console.log("Cupcake Set");
//        break;
//    case "Cheesecake":
//        console.log("Creamy Cheesecake");
//        break;
//    case "Otherwise":
//        console.log("Cheese cake");
//}
//if (nu<=2){
//    console.log("small");
//}else if(nu >=3 && nu <=5){
//    console.log("Medium")
//}else{
//    console.log("Large");
//}

//question 4                                            <------
//let input = parseInt(prompt("Please enter number from 1 to 100"));
//if (input<=100){
//    for(i=0; i<=input;i++){
//        console.log(i);
//    }
//    console.log("The number is not in the [0, 100] interval");
//}

//question 5
//let input = parseInt(prompt("enter any number"));
//while(input>0){
//    let total=0;
//    let i = parseInt(prompt("Enter any number"));
//    total = total+i;
//    console.log(`your total profit is ${total}`);
//}

//question 6
//let string1 = "HOLIDAYS22";
//let input = prompt("Please enter the promo code");
//while(input!==string1){
//    console.log("Please try again")
//    input = prompt("Please enter the promo code");
//}
//console.log("10% discount has been applied");

//question 7                                            <------
//let un = "admin_425";
//let pass = "jvv0oj45tm";
//let inputun = prompt("Please enter username");
//let inputpass = prompt("Please enter password");
//let n = 4;
//if (un !== inputpass && pass !== inputpass) {
//    while ((un !== inputpass && pass !== inputpass) && n >= 1) {
//        inputun = prompt("Please enter username");
//        inputpass = prompt("Please enter password");
//        console.log(`Invalid, Please try again ${n} attempts left`);
//        n--;
//    }
//    console.log("No attempts left. We have to block your account");
//}else{
//    console.log("Success");
//}

//question 8                                                    <------
//let input=prompt("Please enter character name");
//while(input!=0){
//    if(input==="Peter Parker"){
//        console.log("Spider-Man")
//    }else if(input==="Fiona"){
//        console.log("Shrek")
//    }else if(input==="Jack Sparrow"){
//        console.log(`The Pirates of the Caribbean`)
//    }else if(input==="Master Shifu"){
//        console.log("Kung Fu Panda")
//    }else{
//        console.log(`I don’t know him/her yet`)
//    }
//    input=prompt("please enter character name");
//}

//question 9                                                    <-------
//let input=prompt("Please enter your name");
//for(let i=0; i<=input.length; i++){
//    if(input[i]=="=" || input[i]=="?"|| input[i]=="^" || input[i]=="$" || input[i]=="@"){
//        console.log(`This symbol ${input[i]} is forbidden`);
//        break;
//    }else{
//        if(i==input.length){
//            console.log("Correct!");
//        }else{
//            continue;
//        }
//    }
//}

//question 10                                                   <-----
//let pr = parseInt(prompt("Please enter the deposit amount"));
//let nu = parseInt(prompt("Please enter the number of years for which you want to be inveted"));
//let result = (pr*(1+(0.09/1)**nu));
//console.log(`Your balance is ${result} after ${nu} years`);

//question 11
//let input=parseInt(prompt("Please enter any number"));
//let isprime=true;
//for (i=2;i<input;i++){
//    if(input%i==0){
//        isprime=false;
//        break;
//    }else{
//        if (isprime){
//            console.log("Prime number");
//        }else{
//            console.log("Not a prime number");
//        }
//    }
//}

//question 12                                                   <-------
//let input=parseInt(prompt("Please enter number upto fibonacci"))
//let nextTerm, n1=0, n2=1;
//for(let i=1; i<input;i++){
//    console.log(n1);
//    nextTerm = n1 + n2;
//    n1 = n2;
//    n2 = nextTerm;   
//}