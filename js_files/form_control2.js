
function formSubmit(f){
    f.preventDefault();
    console.log("Form submitted successfully");
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    console.log("Email ID:",userEmail);
    console.log("Password:",userPassword);
    alert("Login Successful !")
}

