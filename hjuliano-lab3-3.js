
function sortNumbers(ogArray){
    //og meaning original Array
    console.log(`Orginal Array: ${ogArray} \n`)
    var sortedArray = [];
    while (ogArray.length > 0){
        sortedArray.push(Math.min(...ogArray));
        ogArray.splice(ogArray.indexOf(Math.min(...ogArray)), 1);
    }
    console.log(`Sorted Array: ${sortedArray} \n\n`);
}

sortNumbers([1, 2, 10, 4, 5]);
sortNumbers([-5, -2, 0, 3, 7]);
sortNumbers([50, 20, 80, 10, 40]);

/*
Output: 
Orginal Array: 1,2,10,4,5 
Sorted Array: 1,2,4,5,10 

Orginal Array: -5,-2,0,3,7 
Sorted Array: -5,-2,0,3,7 

Orginal Array: 50,20,80,10,40 
Sorted Array: 10,20,40,50,80 
 */

