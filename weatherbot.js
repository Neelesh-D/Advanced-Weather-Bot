/* Welcome to Advanced Weather Bot */
/*Type your code here .. */
const welcome = "welcome";
const option = "option";
const city = "city";
var state = welcome; 
var cityName, choice = 0;
var result;
async function respond(inputText) {
	if (state == "welcome") {
		Bot.send("Hello, and welcome to TDK Buzz Weather 2.0 Bot");
		Bot.send("To know- Press '1' for Temperature, Press '2' for Pressure, Press'3' for Humidity, Press '0' to Exit");
		state = option;
	}
	else if (state == "option") {
		choice = inputText;
		if (inputText === 0) {
			Bot.send("Thank you for using us!");
		}
		else {
			Bot.send("Please Enter your City Name");
		}
		state = city;
	}
	else{
		cityName = inputText;
		result = await CampK12.fetch("GET", " https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=37d99f4c8bd8fa96d4509c54c8a262d7");
		console.log(result.main.temp);
		if (choice == 1){
			Bot.send("The Temperature of " +cityName+ " is " +(result.main.temp-273.17).toFixed(2)+ " °C");
		}
		else if (choice == 2){
			Bot.send("The Pressure in " +cityName+ " is " +result.main.pressure+ " hg/mm");
		}
		else if (choice == 3){
			Bot.send("The Humidity in " +cityName+ " is " +result.main.humidity+ " %");
		}
		state = welcome;
	}
}
