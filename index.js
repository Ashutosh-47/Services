const btn = document.getElementById("butn")
const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");

btn.addEventListener("click" , (e) => {

    e.preventDefault();

    let namVal = name.value ;

    let emailVal = email.value;

    let msgval = msg.value ;

    ( namVal == "" || emailVal == "") ? alert("Please Fill All the Details") : (
      
        
        alert("We will Contact you soon") ,

        name.value = "" ,
        email.value = "" , 
        msg.value = ""
)  

})


