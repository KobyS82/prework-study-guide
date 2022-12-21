const variable1 = process.argv[2];
const variable2 = process.argv[3];

function compare(){
    if (variable1 == variable2){
        return true
    } else {
        return false
    }
}

console.log(compare());
