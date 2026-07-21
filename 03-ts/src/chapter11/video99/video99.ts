export {}
console.log("Video 99");

type TName = string | null;

let name: TName = null;

const age = undefined;

const printName = (myName: TName) => {
    // if (myName)
    //     myName.toUpperCase();
    myName!.toUpperCase(); // bao cho editor biet bien nay khac null
    console.log("name = ", myName);
}

