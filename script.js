// From Emmie Zomato test sandwich
//curl -X GET --header "Accept: application/json" --header "user-key: a5bb2788edd5f0e639d27799f31f3d49" 
// "https://developers.zomato.com/api/v2.1/search?entity_id=3889&entity_type=city&q=Sandwich&count=20"


// From Jennys demo
const apiKey = 'a5bb2788edd5f0e639d27799f31f3d49'


const cityId = 84 //Prague
const cuisineId = 1035
//const cityId = 3889; // Stockholm 
//const cuisineId = 156 // Greek in NY

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}?`;

fetch(url, { headers: { "user-key": apiKey } })
  .then(res => res.json())
  .then(json => {
    console.log(json);
    json.restaurants.forEach(resto => {
      console.log(resto.restaurant.name)
      console.log(resto.restaurant.location.cuisine)
        document.getElementById("restaurants").innerHTML += `<li>${
        resto.restaurant.name
      }</li>
      <div style="width: 100px; height: 100px; background-image: url(${
        resto.restaurant.photos[0].photo.thumb_url
      })" </div>`;
    });
  });


