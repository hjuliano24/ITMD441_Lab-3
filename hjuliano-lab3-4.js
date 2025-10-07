function celsiusToFahrenheit (celsius){
     celsius = parseInt(celsius).toFixed(1);
    let fahrenheit = ((celsius * 9/5) + 32).toFixed(1);

    console.log(`${celsius} Celsius = ${fahrenheit} Fahrenheit`);
}

celsiusToFahrenheit(25);
celsiusToFahrenheit("77");
celsiusToFahrenheit(-1);
celsiusToFahrenheit("-32");

/*
Output:
25.0 Celsius = 77.0 Fahrenheit
77.0 Celsius = 170.6 Fahrenheit
-1.0 Celsius = 30.2 Fahrenheit 
-32.0 Celsius = -25.6 Fahrenheit
*/