
$(document).ready(function() {
  $("#suggester").submit(function(event) {
    event.preventDefault();
    const userName = $("input#name-input").val();
    const selection1 = $("#selection1").val();
    const selection2 = $("#selection2").val();
    const selection3 = $("#selection3").val();
    
    $("#display-name").text(userName);
    $("#display-cSharp").hide();
    $("#display-ruby").hide();
    $("#display-java").hide();
    $("#display-message").hide();
    $("#display-empty-form").hide();


    if(selection1 === "0" && selection2 === "0" && selection3 === "0" || selection1 === "0" || selection2 === "0" || selection3 === "0"){
      $("#display-empty-form").show();
    } else if(selection1 === "2" && selection2 === "1" && selection3 === "1"){
      $("#display-cSharp").show();
    } else if(selection1 === "1" && selection2 === "2" && selection3 === "2"){
      $("#display-ruby").show();
    } else if(selection1 === "1" && selection2 === "3" && selection3 === "3"){
      $("#display-java").show();
    } else{
      $("#display-message").show();
    }

  });
});