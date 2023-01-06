// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
    const found = arr.find(element => element == target);
    const length = arr.length;
    if (!found || found === undefined) {
        console.log('NOT FOUND');
        return -1;
    } else {
        console.log('ELSE');
        for (let i = 0; i < length; i++) {
            console.log('FOR');
            if (arr[x].value() === target){
                console.log('YAY');
                return x;
            } else {
                console.log('NOT YET');
                x++;
            }
        
        }
        // return found;
    }
};