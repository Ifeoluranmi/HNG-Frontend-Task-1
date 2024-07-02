 // Get current date and time
 const d = new Date();
 let currentDay = d.toUTCString();

 // Insert date and time into HTML
 document.getElementById("currentDay").innerHTML = currentDay;