console.log("Hello World!\n==========\n");
console.log(
    "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favNum = 24;

let askFavNum = prompt("What is my favorite number?")

if (askFavNum < favNum) {
    console.log("Too low")
} else if (askFavNum > favNum) {
    console.log("Too high")
} else {
    console.log("Congratulations!")
}


let birthMonth = prompt("What is your birth month?")

switch (birthMonth) {
    case "december":
    case "january":
    case "febuary":
        {
            console.log("You were born in the Winter! Brrr...")
        }
        break;
    case "march":
    case "april":
    case "may":
        {
            console.log("You were born in the Spring!")
        }
        break;
    case "june":
    case "july":
    case "august":
        {
            console.log("You were born in the summer! Is the AC on?")
        }
        break;
    case "september":
    case "october":
    case "november":
        {
            console.log("You were born in the fall!")
        }
        break;
    default:
        {
            console.log("Did you make a typo?")
        }
        break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
    case "01":
        type = "Tank top";
        break;
    case "02":
        type = "T-Shirt";
        break;
    case "03":
        type = "Long Sleeve";
        break;
    case "04":
        type == "Sweat Shirt";
        break;
    default:
        type = "Other";
        break;
}

switch (colorId) {
    case "BL":
        color = "Black";
        break;
    case "B":
        color = "Blue";
        break
    case "RD":
        color = "Red";
        break
    case "PU":
        color = "Purple";
        break
    default:
        color = "White";
        break
}

switch (sizeId) {
    case "S":
        size = "Small";
        break;
    case "M":
        size = "Medium";
        break;
    case "L":
        size = "Large";
        break
    case "XL":
        size = "Extra Large";
        break
    default:
        size = "One Size Fits All";
        break
}

console.log(`Product: ${size} ${color} ${type}`);