
function formSubmit(f){
    f.preventDefault();
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    if (userEmail == null || userEmail == ''){
        let userEmailError = document.getElementById("userEmailError");
        userEmailError.innerHTML = "Please enter your email-ID to continue";
        userEmailError.style.display = 'block';
        return false;
    }else{
        userEmailError.innerHTML = "";
        userEmailError.style.display = 'none';
    }
    
    if (userPassword == null || userPassword == '' || userPassword.length < 8 || userPassword.length > 16 ){
        let userPasswordError = document.getElementById("userPasswordError");
        userPasswordError.innerHTML = "Please enter your password (8 to 16 characters)";
        userPasswordError.style.display = 'block';
        return false;
    }else{
        userPasswordError.innerHTML = "";
        userPasswordError.style.display = 'none';
    }
    console.log("Customer Login Success");
    console.log("Email ID:",userEmail);
    console.log("Password:",userPassword);
    if(!alert("Login Successful")){window.location.reload();}
}

