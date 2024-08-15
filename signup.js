function nextPage(){
    var users = JSON.parse(localStorage.getItem('users'))||[];



    var allInputs = document.getElementsByTagName('input')
    var firstName = allInputs[0]
    var email = allInputs[1]
    var password = allInputs[2]
    var confirmPassword = allInputs[3]
    
    

    var user={
        name:firstName.value,
        email:email.value,
        password:password.value,
    }
    if(password.value.length < 6){
        alert("Please Fill 6 Characters Password")
        return
    }

    if(password.value!==confirmPassword.value){
        alert("Incorrect Password")
        return
    }


    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))


    alert('Register Successfuly')
    window.location.href='./login.html'



    
}