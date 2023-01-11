
// main div:
let div = document.createElement("div");
document.body.append(div);

// Heading:
let heading = document.createElement("h1");
heading.innerText = "Brewery Details for US Country"  
heading.setAttribute("id", "title");
div.append(heading);

// Main container:
let mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "container");
div.append(mainContainer)


//Fetch Brewery api:

fetch("https://api.openbrewerydb.org/breweries")
.then((response => response.json()))
.then((data => {
  
   data.forEach(element => {
      
      let brewery = {
        
         ...element,

         name : element.name,
         brewery_type : element.brewery_type,
         street : element.street,
         state : element.state,
         phone : element.phone,
      }

      breweryDetails(brewery)
   });
})).catch((err) => console.log(err))


function breweryDetails({name,  brewery_type, street, state, phone})
{
   mainContainer.innerHTML +=

   ` 
   <div class="card" style="width: 18rem;">
      <div class="card-body">
         <div class="card-text-style">
   <p class="card-text"> <span> Breweries Name: </span> ${name}</p>
   <p class="card-text"> <span>Type:</span>  ${brewery_type} </p>
   <p class="card-text"> <span>Brewery’s street:</span> ${street} </p>
   <p class="card-text"> <span>State:</span> ${state} </p>
   <p class="card-text"> <span>Phone No:</span> ${phone} </p>
  
        </div>
   </div>`
}