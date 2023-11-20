
function formSubmit(e){
    e.preventDefault();
    console.log("Form submitted successfully");
    let userFullName = document.getElementById("userFullName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let userAddress = document.getElementById("userAddress").value;

 
    if (userFullName == null || userFullName == '' || userFullName.length < 3 || userFullName.length > 35){

        let userFullNameError = document.getElementById("userFullNameError");
        userFullNameError.innerHTML = "Enter Your Full Name to continue (3 to 35 characters are allowed)";
        userFullNameError.style.display = 'block';
        return false;    
     }else{
        userFullNameError.innerHTML = "";
        userFullNameError.style.display = 'none';
     }

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

    if (userAddress == null || userAddress == '' || userAddress.length < 15 || userAddress.length > 50 ){
        let userAddressError = document.getElementById("userAddressError");
        userAddressError.innerHTML = "Please enter your full address (15-50 characters are allowed)";
        userAddressError.style.display = 'block';
        return false;
    }else{
        userAddressError.innerHTML = "";
        userAddressError.style.display = 'none';  
    }

    console.log("Full Name:",userFullName);
    console.log("Email ID:",userEmail);
    console.log("Password:",userPassword);
    console.log("Address:",userAddress);
    if(!alert("Account Created Successfully !")){window.location.reload();}
}

