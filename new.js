

var productId=window.location.search.split('=')[1]

console.log(productId)

fetch(`https://fakestoreapi.com/products/${productId}`)
.then(response => response.json())
.then(response => {

    var data=response
    console.log(data)
    var getData=document.getElementById('getData')
    getData.innerHTML=`
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${data.image}" class="d-block" style="width:100%; height:90vh;" alt="...">
     <h5 class="card-title">${data.title}</h5>
     <h4 class="card-title"> price $ ${data.price}</h4>
      <h3 class="card-title"> rating *${data.rating.rate}</h3>
       <h2 class="card-title">${data.description}</h2>
    </div>
    <div class="carousel-item">
    <img src="" class="d-block" style="width:100%; height:90vh;" alt="...">
    </div>
    <div class="carousel-item">
      <img src="" class="d-block" style="width:100%; height:90vh;" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`
})
function cardId(id){
    window.location.href='./next.html?productdetails='+id
}
var userlogin = JSON.parse(localStorage.getItem('users'))||[];
for (var i=0; i<userlogin.length;i++){
    var data = userlogin[i]
    document.getElementById('userNames').innerHTML=data.name
}