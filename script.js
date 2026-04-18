const validateForm = (event) =>{
    event.preventDefault()
    
    let username =  event.target.username.value
    let password =  event.target.password.value
    let msg  = document.getElementById("message")

    msg.style.color="red"
    if(username === "" && password === "")
    {
        msg.innerHTML = "Please Enter Username and Password"
    }
    else if(username === "")
    {
        msg.innerHTML = "Please Enter Username"
    }
    else if(password === ""){
        msg.innerHTML = "Please Enter Password"
    }
    else{
        msg.style.color = "green"
        msg.innerHTML = "Login Successful"
    }
    

}