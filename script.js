let humburgerIcon = document.getElementById("humburger")
let sideNav = document.getElementById("sidenavbar")
let closeButton = document.getElementById("colseBtn")

humburgerIcon.addEventListener("click",function(){
    sideNav.style.right = "0"
})

closeButton.addEventListener("click",function(){
    sideNav.style.right = "-24rem"
})



var searchBar = document.getElementById("search")
var productsContainer  = document.getElementById("products")
var eachProduct = productsContainer.querySelectorAll("div")

console.log(eachProduct)

searchBar.addEventListener("keyup",function(){
    
     var eneterdTxt = event.target.value.toUpperCase()

      for(i=0;i<eachProduct.length;i++){

        
            var itemNames = eachProduct[i].querySelector("p").textContent
            
            if(itemNames.toUpperCase().indexOf(eneterdTxt)<0)
            
            {
            eachProduct[i].style.display= "none"
            }   


            else{        eachProduct[i].style.display= "block"
            }
    
        }

    
    



})




