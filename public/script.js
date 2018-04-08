document.addEventListener('DOMContentLoaded', getCurrentLocation);

       function getCurrentLocation(){
        alert("hello");

        //Source: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
        // In the following line, you should include the prefixes of implementations you want to test.
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        // DON'T use "var indexedDB = ..." if you're not in a function.
        // Moreover, you may need references to some window.IDB* objects:
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
        // (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB");
        }
            navigator.geolocation.getCurrentPosition(getNearbyConcerts);
        }
        function getNearbyConcerts(currentLocation){
            console.log(currentLocation);
            let long = currentLocation.coords.longitude;
            let lat = currentLocation.coords.latitude;
            let tours = {};

            console.log(long, lat);
            $.getJSON(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=8GeWhE6iAVe1C4OaVvktBf
            auENCKgwxw&latlong=${lat},${long}&classificationName=music`)
            .done(data => {
                data._embedded.events.forEach(event => {
                    // console.log(event.name);
                    if (!tours[event.name]){
                        tours[event.name] = [];
                        tours[event.name].push(event.dates.start);
                    }
                    else {
                        tours[event.name].push(event.dates.start);
                    }
                });           
                console.log(tours);
     
            })

        }


// function getTopTracks(event) {
// 	 var query = document.getElementById("query").value;
// 	 var req = new XMLHttpRequest(); 
// 	 var url = "https://api.spotify.com/v1/artists/{id}/top-tracks" + query;
// 	 req.open("GET", url, true);
// 	 req.addEventListener('load', function() {
// 	   if(req.status >= 200 && req.status < 400){
// 	     var response = JSON.parse(req.responseText);
//        tracks = response.results;
// 	     displayTracks(response.results);
// 	   } else {
// 	       console.log("Error in network request: " + req.statusText);
// 	   }
// 	 }); 
// 	 req.send(null);
// 	event.preventDefault();
// }


// // Append to list
// function displayTracks(object) {
//   var tracksArray = object.tracks;    
//   var listArea = document.getElementById("listContent");

//   // Create button when list is created
//   var button = document.createElement('a'); //Preview node      
//   var text = document.createTextNode("Add Playlist"); 
//   button.appendChild(text);
//   button.href = "#"
//   button.className = "list-group-item list-group-item-action"; //Set type      
//   button.setAttribute("role", "button");
//   button.setAttribute("onclick", "addPlaylist()");
//   button.style.textAlign = "center";
//   button.style.color = "white";
//   button.style.backgroundColor = "#dddedf";
//   button.style.color = "black";

//   //Grab the list
//   var list = document.createElement("ul");
//   list.id = "trackList";
//   list.style.listStyle = "none";
//   list.className = "list-group";  

//   //Throw pop-up if empty array
//   if (!tracksArray[0]) {
//     alert("Your search returned 0 results.");
//   }  
//   else {    

//     for (var i = 0; i < tracksArray.length; i++) { 

//       //Assign Track Info      
//       var curTrack = tracksArray[i];  
//       var trackName = curTrack.name;                           
//       var trackAlbum = curTrack.album.name;      

//       //Create HTML DOM Elements      
//       var trackNode = document.createElement('a'); //Preview node      
//       trackNode.id = i;      
//       trackNode.href = tracksArray[i].preview_url; //Preview link
//       trackNode.target = "player";
//       trackNode.className = "list-group-item list-group-item-action"; //Set type      
//       trackNode.textContent = trackName;
      
//       //Append the individual track node to the ul List
//       list.appendChild(trackNode);      
//     } 

//     //Append the whole list to the List Div     
//     var trackList = document.getElementById("trackList");
//     if (trackList)
//       listArea.replaceChild(list, trackList);          
//     else
//       listArea.appendChild(button);
//       listArea.appendChild(list);      
//   }    
// }




        
// var saveEvent = function(event){

// }

