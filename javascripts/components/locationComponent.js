const locationBuilder = (arrayOfLocations) => {
    let domString = "";
    arrayOfLocations.forEach((location) => {
        domString += `<div class="location d-inline-block col-4">
        <img class="card-img-top" src="${location.locationImageUrl}" alt="Card image cap">
        <div class="card-body">
          <h2 class="locationName">${location.locationName}</h2>
          <p class="locAddress">${location.locationAddress}</p>
          <p class="shootTime">${location.shootTime}</p>
        </div>
      </div>`
    });


$("#locationCards").append(domString);





}

$.get('../db/locations.json')
    .done((data) =>{
        console.log(data);
     locationBuilder(data.locations);  
    })

.fail((error) => {
    console.error(error);
});