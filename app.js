fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(response => {
    for (var i=0; i<response.length; i++){
        var data = response[i]
        console.log(response);
        var renderData = document.getElementById('renderData')
        renderData.innerHTML+=`
        <div class="card" style="width: 19rem;" onclick="cardId(${data.id})">
      <img src="${data.image}" class="card-img-top" style="width:200px;" alt="...">
      <div class="card-body" >
       <h4 class="card-title"> price $ ${data.price}</h4>
       <h5 class="card-title"> Rating * ${data.rating.rate}</h5>
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>` 
    }
})
function cardId(id){
    window.location.href='./next.html?productdetails='+id
}
var userlogin = JSON.parse(localStorage.getItem('users'))||[];
for (var i=0; i<userlogin.length;i++){
    var data = userlogin[i]
    document.getElementById('showName').innerHTML=data.name
}
  
