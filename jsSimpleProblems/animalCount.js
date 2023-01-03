/* 
 animal count in the jungle ( for 1st 10 miles = total 10*10 && 2nd 10 miles = total 50*10
 && for rest miles = *100 ) 
 */
function animalCont (miles) {
    const first10miles = 10;
    const second20miles = 50;
    const restMiles = 100;
    if(miles <= 10) {
        let count = miles * first10miles;
        console.log(count);
    }
    else if(miles >= 11 && miles <= 20) {
        let count1 = miles - 10;
        let count2 = count1 * second20miles;
        let count3 = count2 + 100;
        console.log(count3);
    }else{
        let count4 = miles - 20;
        let count5 = restMiles * count4;
        let count6 = count5 + (first10miles * 10) + (second20miles * 10);
        console.log(count6);
    }
}
animalCont(51);