/*
get the two input values of temperature and wind speed,
check to make sure they meet the specification limits(<=50°F and >3.0mph) allowed to officially calculate the wind chill,
and either calculate and display the wind chill factor value or display "N/A" (not applicable)
if the input values did not meet the requirements
*/
/*
f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
and s is the wind speed in miles per hour.
f = 35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + (0.4275 * t * (s**0.16))
*/


const temp = document.querySelector('#temp');
const wS = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');
console.log(temp, wS);

function calculate(t, s){
    let windC = 35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + (0.4275 * t * (s**0.16));
    console.log(windC);
    return windC
}
console.log(calculate());
function display() {
    if (temp <= 50 && wS > 3){
        windChill.innerHTML = calculate(temp, wS) + '&#8457;';
    } else {
        windChill.innerHTML = 'N/A';
    } 
}
display();
