function showSubmmitButton()
   { if(!(document.getElementById("fname").value==='')&&!(document.getElementById("lname").value==='')){
   
   
    document.getElementById("submit").style.display = "none";

    }
    else{
        document.getElementById("submit").style.display = "block";
    }
}
