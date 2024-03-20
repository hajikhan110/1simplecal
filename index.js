import inquirer from "inquirer";
const ans = await inquirer.prompt([{ message: "enter ist number", type: "number", name: "istnumber" },
    { message: "enter 2nd number", type: "number", name: "secondnumber" },
    {
        message: "select one the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiply", "Divide"]
    }
]);
if (ans.operator === "Addition") {
    console.log(ans.istnumber + ans.secondnumber);
}
else if (ans.operator === "Subtraction") {
    console.log(ans.istnumber - ans.secondnumber);
}
else if (ans.operator === "Multiply") {
    console.log(ans.istnumber * ans.secondnumber);
}
else if (ans.operator === "Divide") {
    console.log(ans.istnumber / ans.secondnumber);
}
//console.log(ans)
/*
const ans = await inquirer.prompt([
    { messgae: "enter1", type: "number", name: "enter1" },
    { message: "enter2", type: "number", name: "enter2" },
{
    message: "select one of the below",
    type: "list",
    name: "oprator",
    choices: ["Addition", "subtraction", "mult", "Div"],

}]);

// change onle es2016 to this "target": "es2022", in tsconfi
//and run with this command  npx esrun 1newprojectcal.ts
   //till here display what we have enter below this we will do calculation
   // console.log(ans);

    //now calculation
    if(ans.oprator === "Addition"){
        // console.log(`Addition value will be" + ${ans.enter1} + ${ans.enter2}`)
              console.log(ans.enter1 + ans.enter2)
    }
    else if (ans.oprator === "subtraction"){

        console.log(ans.enter1 - ans.enter2)
       //console.log(`subtraction value will be" + ${ans.enter1} -${ans.enter2}`)
    }
    else if (ans.oprator === "mult"){
 console.log(ans.enter1 * ans.enter2)
         //console.log(`Multi value will be" + ${ans.enter1} * ${ans.enter2}`)
    }
    else if (ans.oprator === "Div"){
        console.log(ans.enter1 / ans.enter2)
        //console.log(`Division value will be" + ${ans.enter1} / ${ans.enter2}`)
    }
    */ 
