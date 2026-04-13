// console.log("hey");
const button = document.querySelector(".button");

// // localStorage.removeItem('sharedData')
// console.log(receivedData);
// button.addEventListener("click", moveAll);

console.log("hello");

button.addEventListener("click", (e) => {
  e.defaultPrevented;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const dateValue = new Date(date);
  const timeValue = new Date(`1994-12-03T${time}`);

  const isoDate = dateValue.toDateString();
  const isoTime = timeValue.toLocaleTimeString();

  console.log("Date:", isoDate);
  console.log("time:", isoTime);
});
