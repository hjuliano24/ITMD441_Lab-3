
let numbers = [2, 5, 23, 6, 9, 4, 30, 1];
let test = [25, 50, 75, 100]; 
function minMaxAverage(array) {
    var totalNumber = array.length;
    var minValue = Math.min(...array);
    var maxValue = Math.max(...array);
    var average = maxValue / totalNumber;
    console.log(`Total Numbers: ${totalNumber}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average} \n`);
}

/*
Output
Total Numbers: 8, Min Value: 1, Max Value: 30, Average: 3.75
Total Numbers: 4, Min Value: 25, Max Value: 100, Average: 25  
*/
minMaxAverage(numbers);
minMaxAverage(test);    