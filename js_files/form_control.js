
function formSubmit(e){
    e.preventDefault();
    console.log("Form submitted successfully");
    let userFullName = document.getElementById("userFullName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let userAddress = document.getElementById("userAddress").value;

    console.log("Full Name:",userFullName);
    console.log("Email ID:",userEmail);
    console.log("Password:",userPassword);
    console.log("Address:",userAddress);
    alert("Account Created Successfully !")
}

