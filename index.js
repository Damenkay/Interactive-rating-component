
 var submitRating = document.getElementById("submitt");
 var selectedRate = document.getElementById("selectedRate")
    
    document.getElementById( "thankyou" ).style.display = "none";
    document.getElementById( "rating" ).style.display = "";
    submitRating.onclick = displayCard;

function displayCard() {
    document.getElementById( "thankyou" ).style.display = "";
    document.getElementById( "rating" ).style.display = "none";
}

function viewRate(button) {
    var rate = button.getAttribute("rate");
    selectedRate.innerHTML = rate;
}









   
 

