let wrapper=document.querySelector(".wrapper"),
generateBtn=document.querySelector(".form button"),
qrinput=document.querySelector(".form input");
qrimg=document.querySelector(".qr-code img");

generateBtn.addEventListener("click", ()=>{
    let qrvalue=qrinput.Value;
    // if(!qrvalue) return;  //if the input is empty return from here
     qrimg.src=' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}';
    wrapper.classList.add("active");
});  