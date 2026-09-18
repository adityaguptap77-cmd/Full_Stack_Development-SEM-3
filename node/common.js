function calculateArea(radius){
 // const radius=2
  const area = 3.14*radius*radius;
  console.log(area);
}
calculateArea(5);
//for exporting the function to other files
function calculateArea(radius=2){
  return 3.14*radius*radius;  
}
function calculatePerimeter(radius){
return 2*3.14*radius
}
module.exports = {calculateArea,calculatePerimeter}
