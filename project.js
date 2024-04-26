

const universities = [
    { name: "University of Example", location: "New York" },
    { name: "Another University", location: "California" },
  ];
  

  console.log(universities[0].name);  
  const image = document.getElementById("rotatableImage");
let currentAngle = 0;

image.addEventListener("click", () => {
  currentAngle += 360; 
  image.style.transform = `rotate(${currentAngle}deg)`;
});
const buttons = document.querySelectorAll(".user-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("animate__animated", "animate__bounce");
    
    setTimeout(() => {
      button.classList.remove("animate__animated", "animate__bounce");
    }, 500);
  });
});
