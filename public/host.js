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
			tenant : null               
		})
			.then(function(){
				console.log("Write to DB Successful!");
				status.innerHTML = "Posting Successful!";
			});
	});
}());