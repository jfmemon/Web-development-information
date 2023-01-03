// Is leap year or not
function findLeapYear(year) {
    if(year % 4 == 0) {
        return true;
    }else{
        return false;
    }
}
var result = findLeapYear(2030);
console.log(result);



