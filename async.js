

function firstfn()  {
    console.log("first fn start");
    secondFn.log();
    console.log("first fn finish")
}

function secondFn () {
    console.log("Second fn to start");
    fourthFn();
    console.log("second fn finish")
}

function thirdFn () {
    console.log("THIRD");
}

function fourthFn () {
    console.log("Fourhtbfn start");
    fifthFn();
    console.log("Fourth fn finish");
}

function fifthFn () {
    console.log("FIFTH");
}

firstfn();
thirdFn();