/*
get the two input values of temperature and wind speed,
check to make sure they meet the specification limits(<=50°F and >3.0mph) allowed to officially calculate the wind chill,
and either calculate and display the wind chill factor value or display "N/A" (not applicable)
if the input values did not meet the requirements
*/
/*
f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
and s is the wind speed in miles per hour.
f= 35.74 + 0.6215 * t**0.16 + 0.4275 * t * s**0.16
*/


temp = document.querySelector('#temp');
wS = document.querySelector('#windSpeed');

function calculate() {
    windChill = 35.74 + 0.6215 * temp**0.16 + 0.4275 * temp * wS**0.16;
    return windChill
}

function display() {
    if (temp <= 10) {
        document.querySelector('#windChill').innerHTML = calculate() + '&#8451;';
    } else if (wS > 4.82803) {
        document.querySelector('#windChill').innerHTML = calculate() + '&#8451;';
    }   
    else {
        document.querySelector('#windChill').innerHTML = `N/A`;
    }
}

display();