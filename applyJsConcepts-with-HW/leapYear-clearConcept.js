// Is a year leap year or not clear concept
function leapYear (year) {
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true;
    } else{
        return false;
    }
}

var result = leapYear(2004);
console.log(result);


//return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);