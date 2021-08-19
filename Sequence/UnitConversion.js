let inch = 42;
let feet = inch/ 12;
let rem = inch % 12;
console.log(feet + " feet and " + rem + " inches");


//convert feet to meter
let length = 60;  //divide lenght by 3.281 to convert feet to meter
let width = 40

//formula for rectangle area
let area = (length*width);
let total = area *0.3048;
console.log('area = '+ total +'\tMeters');

//calculate for 25 plots
let totalArea = area*25;
console.log('Total Area of 25 plots = '+totalArea +'\tMeters' );

//formula for converting squaremeter to area
let areaInAcre = (totalArea*2.2957).toFixed(2);
console.log('Area of 25 plots are ='+ areaInAcre +'\tacres');