(function(){

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	// var firebaseConfig = {
	// 	apiKey: "AIzaSyC6g7B4jSjPvYSj4xDk5ohpa4cb0D1Iako",
	// 	authDomain: "mocko-69e41.firebaseapp.com",
	// 	databaseURL: "https://mocko-69e41.firebaseio.com",
	// 	projectId: "mocko-69e41",
	// 	storageBucket: "mocko-69e41.appspot.com",
	// 	messagingSenderId: "987418970471",
	// 	appId: "1:987418970471:web:7593fad95e4ebe62f9c7c2"
	// };
	// Initialize Firebase
	// firebase.initializeApp(firebaseConfig);


	// handle on firebase db
	const db = firebase.database();

	// get elements
	const TOA   = document.getElementById('typeOfAccommodation');
	const LS	= document.getElementById('livingSituation');
	const NOG   = document.getElementById('numberOfGuests');
	const FamF  = document.getElementById('FamilyFriendly');
	const FemF  = document.getElementById('FemaleFriendly');
	const FemO  = document.getElementById('FemaleOnly');
	const PetF  = document.getElementById('PetFriendly');
	const SmoF  = document.getElementById('SmokingFriendly');
	const LOS   = document.getElementById('lengthOfStay');
	const units = document.getElementById('units');
	const pb 	= document.getElementById('postbutton');
	const status  = document.getElementById('status');
	var location = null;


	//try moving mapbox functionality to JS script amm
	mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhcnJ5IiwiYSI6ImNrZmVmd3hkbDA0aWEyeXRqaGpxbDBzNWsifQ.bIHGogBJUCCaraWEZv8KHA';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-79.4512, 43.6568],
		zoom: 13
	});
    
	var geocoder = new MapboxGeocoder({
		placeholder: 'Enter Location Address',
		accessToken: mapboxgl.accessToken,
		marker: {
		color: 'orange'
		},
		mapboxgl: mapboxgl
	});
 
	map.addControl(geocoder);

	map.on('load', function () {
		// Listen for the `geocoder.input` event that is triggered when a user
		// makes a selection
		geocoder.on('result', function (ev) {
			console.log(ev.result.center); 
			location = ev.result.center;
		});
  });





	// write
	pb.addEventListener('click', e => {
		var user = firebase.auth().currentUser;
		var id = user.uid;
		var postRef = db.ref('users/' + id + '/postings');

		console.log(firebase.auth().currentUser.uid);
		console.log({
			typeofaccomodation : TOA.value,
			livingsituation : LS.value,
			numberofguests : NOG.value,
			familyfriendly : FamF.value,
			femalefriendly : FemF.value,
			femaleonly : FemO.value,
			petfriendly : PetF.value,
			smokingfriendly : SmoF.value,
			lengthofstay : LOS.value,
			losunits : units.value,
			latlon: [location[1],location[0]],
			tenant : null        
        });

		var newPostRef = postRef.push();
        newPostRef.set({
			typeofaccomodation : TOA.value,
			livingsituation : LS.value,
			numberofguests : NOG.value,
			familyfriendly : FamF.value,
			femalefriendly : FemF.value,
			femaleonly : FemO.value,
			petfriendly : PetF.value,
			smokingfriendly : SmoF.value,
			lengthofstay : LOS.value,
			losunits : units.value,
			latlon: [location[1],location[0]],
			tenant : null               
		})
			.then(function(){
				console.log("Write to DB Successful!");
				status.innerHTML = "Posting Successful!";
			});
	});
}());

