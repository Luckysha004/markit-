function moveToNext(currentInput, event) {

    if (event.keyCode === 8) {
        var previousInput = currentInput.previousElementSibling;
        previousInput.focus();
        return;
    }

    var nextInput = currentInput.nextElementSibling;
    nextInput.focus();
}


// get otp

var loginOtp = ""
document.querySelector(".otpGenreator").addEventListener("click",()=>{
   
    var mobileNumber = document.querySelector(".mobile-no").value
    if (mobileNumber.length == 0){
        showToast("Enter the mobile number",1)
    }else if (mobileNumber.length == 10  &&  /^\d+$/.test(mobileNumber)){
        document.querySelector(".logging").classList.add('card-hide')
        let otp = ""
        for (let i= 0; i < 4; i++){
            otp += (Math.floor(Math.random()*9)).toString()
        }
        alert(otp)
        loginOtp = otp
        document.querySelector(".logging-2").classList.remove('card-hide')
        document.querySelector(".logging-2").classList.add('card-show')
    }
    else{
        showToast("Invalid Mobile Number",1)
    }

    document.querySelector(".mobile-no").value = ""
  })


  function otpCheck(){

    let confirmOtp = ""
    let otpArr = document.querySelectorAll(".otp-box")
    let otpCount = 0
    for (let otp of otpArr){

        let otpVal =  (otp.value).toString()
        if (otpVal != ""){
            confirmOtp += otpVal
            otpCount += 1
        }
    }
 
    if (loginOtp == confirmOtp && otpCount == 4 &&  /^\d+$/.test(confirmOtp)){
        showToast("Successfully logined")
        // document.querySelector(".otp-check").setAttribute('href', 'index.html')
        
    }else if(otpCount < 4){
        showToast("Otp should contain 4 digits",1)
    }else{
        for (let otp of otpArr){
            otp.value = ""
        }
        showToast("Wrong otp",2)
        document.querySelector(".logging").classList.remove('card-hide')
        document.querySelector(".logging").classList.add('card-show')
        document.querySelector(".logging-2").classList.remove('card-show')
        document.querySelector(".logging-2").classList.add('card-hide')
    }
  }





function showToast(val, check) {
    var toast = document.getElementById("toast");
    var toastSymbol = document.querySelector(".toast-symbol")
    if (check == 1){
        toastSymbol.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> `
    }else if(check == 2){
        toastSymbol.innerHTML = `<i class="fa-solid fa-ban"></i>`
    }
    document.querySelector(".toast-message").innerHTML =  val
    toast.classList.add("show");
    var toastLine = document.querySelector(".toast-line");
    toastLine.style.animation = 'none';
    toastLine.offsetHeight; 
    toastLine.style.animation = null; 

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
}

