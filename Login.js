function SubmitMy(){
var allInputs = document.getElementsByTagName('input')
var username = allInputs[0].value
var password = allInputs[1].value



var userlogin= JSON.parse(localStorage.getItem('users'))||[];
var found=false


for (var i=0; i<userlogin.length;i++){
    var data = userlogin[i]

    if(data.email===username&&data.password===password){
        alert("login Successfuly")
        found=true
        window.open('./index.html')
        break;
    }
}
if(!found){
    alert('Invalid User')
}
}