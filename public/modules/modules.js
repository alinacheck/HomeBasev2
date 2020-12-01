var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onclick="defaultModule()">  
            <img src="hands.jpeg" width="30" height="30" class="d-inline-block align-top" alt="">
            HomeBase
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-item nav-link" href="#" onclick="loadSignIn()" >Sign In</a>
            </li>
            <li class="nav-item">
                <a class="nav-item nav-link" href="#" onclick="loadFindHousing()" >Find Housing</a>
            </li>
            <li class="nav-item">
                <a class="nav-item nav-link" href="#" onclick="loadOfferHousing()" >Offer Housing</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarHelp" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Help
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarHelp">
                    <a class="dropdown-item" href="#" onclick="loadContactUs()" >Contact Us</a>
                    <a class="dropdown-item" href="#" onclick="loadPrivacyPolicy()" >Privacy Policy</a>
                    <a class="dropdown-item" href="#" onclick="loadTermsConditions()" >Terms & Conditions</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-item nav-link" href="#" onclick="loadMyAccount()" >My Account</a>
            </li>
        </div>
    </nav>    

`;

ui.default = `
<div>
<style>
h1 {text-align: center;
padding-top: 5rem;}

p {text-align: center;
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">}
div {text-align: center;}
</style>
<br></br>
<h1>Welcome to</h1>

<img src="hb_title.png" alt="HomeBase" width="350" height="100">
<br></br>

  <p>A centralized resource for finding and offering temporary, safe housing options in the aftermath of a disaster event.</p>
  <img src="Picture 1.png" alt="Hands making house" width="350" height="260">

</div>

`;

ui.findHousing = `


    <div class='flex-parent viewport-full relative scroll-hidden'>
        <div class='flex-child w-full w360-ml absolute static-ml left bottom'>
            <div class='flex-parent flex-parent--column viewport-third bg-white'>
                <div class='flex-child flex-child--grow'>
                    <div id="sidebarA"
                        class="flex-parent flex-parent--column-ml flex-parent--center-main theme py12 px12 ">
                        <h3 id='title' class='txt-l-ml txt-m txt-bold mb6 mr0-ml mr24 align-center block'>
                        </h3>
                        <p id='description' class='txt-s py12 none block-ml'>
                        </p>
                        <div class="flex-parent flex-parent--center-main relative-ml absolute right top mt0-ml mt6">
                            <button id='filterResults' class='txt-bold btn btn--stroke mr0-ml mr12 px18-ml px6'>
                                <svg class='icon inline-block align-middle h24 w24'>
                                    <use xlink:href='#icon-filter' /></svg>
                                <p class="inline-block-ml align-middle remove none">Show Filters</p>
                            </button>
                        </div>


                    </div>
                    <div id="listings" class="flex-child viewport-twothirds py12 px12 listings scroll-auto"></div>

                </div>
            </div>
        </div>
        <div class='flex-child flex-child--grow w-auto viewport-full-ml viewport-twothirds' id='map'>

        </div>

        <div id='modal'
            class='absolute top right bottom left scroll-auto hide-visually flex-parent flex-parent--center-main mt120-ml'>
            <div class='pt36'>
                <div class='flex-child bg-white round relative scroll-auto'>
                    <button id='exitButton' class='absolute top right px12 py12'>
                        <svg class='icon link color-darken50'>
                            <use xlink:href='#icon-close'></use>
                        </svg>
                    </button>
                    <div class='px24 py24'>
                        <form id="filters"></form>
                        <div class='align-center py12'></div>
                        <div class="flex-parent flex-parent--center-main">
                            <button id="removeFilters" class="btn">Reset Filters</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>

    </div>

`;


ui.myAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">My Account</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter email" readonly>
                </div>
                <div class="form-group">
                    <label for="firstName"> First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Enter first name">
                </div>
                <div class="form-group">
                    <label for="lastName"> Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Enter last name">
                </div>
                <div class="form-group">
                    <label for="phoneNumber"> Phone Number</label>
                    <input type="number" class="form-control" id="phoneNumber" placeholder="Enter phone number">
                </div>
                <div class="form-group">
                    <label for="DOB"> Date of Birth</label>
                    <input type="date" class="form-control" id="DOB" placeholder="MM/DD/YYYY">
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="button" class="btn btn-light" onclick="create()">Update account</button>
                    </div>
                </div>
                <div id="acctstatus"></div>
            </form>
        </div>
    </div>
`;

ui.LoggedOut = `
    <div class="card text-white bg-secondary mb-3" style="width: 18rem;">
        <div class="card-header">
            User Error
        </div>
        <div class="card-body">
            <form>
                <h5 class="card-title">No User Logged In</h5>
                <p class="card-text">Please sign in to use HomeBase</p>
                <img src="hands.jpeg" class="card-img-top" alt="Home Image">
                <p class="card-text"></p>
                <button type="submit" class="btn btn-light" onclick="loadSignIn()">Sign In</button>
            </form>
        </div>
        

    </div> 
`;


ui.Login = `

    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Sign In</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                   <!-- <label for="email">Email Address</label> -->
                    <input type="email" class="form-control" id="email" placeholder="Enter email address">
                </div>
                <div class="form-group">
                    <!--<label for="password">Password</label> -->
                    <input type="password" class="form-control" id="password" placeholder="Enter password">
                </div>
                <button type="submit" class="btn btn-light" id="login">Login</button>
                <button type="submit" class="btn btn-light" id="signup">SignUp</button>
                <button type="submit" class="btn btn-light" id="logout" style="display:none;">Logout</button>
            </form>
            <div id = "status"></div> 

        </div>
    </div>




    <!--
    <input id="email" type="email" placeholder="Email"><br>
    <input id="password" type="password" placeholder="Password"><br><br>
    <button id="login">Login</button>
    <button id="signup">SignUp</button>
    <button id="logout" style="display:none;">Logout</button>
    -->
`; 

ui.contactUs = `
<div>

<h1><b>CONTACT US</b></h1>
<br></br>
  <p>The best method to contact us is telepathy. Or extreme programming.</p>

</div>

`; 

ui.termsConditions = `
<div>

<h1><b>TERMS & CONDITIONS</b></h1>
<br></br>
  <p><b>DISCLAIMER & LIABILITY.</b> To the full extent permitted by law, HomeBase, and its officers, directors, employees, agents, licensors, affiliates, and successors in interest (1) make no promises, warranties, or representations as to HomeBase, including its completeness, accuracy, availability, timeliness, propriety, security or reliability; (2) provide HomeBase on an "AS IS" and "AS AVAILABLE" basis and any risk of using HomeBase is assumed by you; (3) disclaim all warranties, express or implied, including as to accuracy, merchantability, fitness for a particular purpose, and non-infringement, and all warranties arising from course of dealing, usage, or trade practice; and (4) disclaim any liability or responsibility for acts, omissions, or conduct of you or any party in connection with HomeBase. HomeBase Entities are NOT liable for any direct, indirect, consequential, incidental, special, punitive, or other losses, including lost profits, revenues, data, goodwill, etc., arising from or related to HomeBase.
  </p>
  <br></br>
  <p><b>INTERACTIONS WITH USERS.</b> You Have Sole Responsibility When Interacting with Hosts or Guests. Our Services provide a platform to arrange stays and communicate with one another. HomeBase is not a party to, has no involvement or interest in, makes no representations or warranties as to, and has no responsibility or liability with respect to any communications, transactions, interactions, disputes or any relations whatsoever between you and any other person or organization. You are solely responsible for your interactions with other users of our Services. We reserve the right, but have no obligation, to monitor interactions between you and other users of our Services. We cannot be responsible for the interactions that you have with other HomeBase members, so please use good judgment and keep safety in mind when you use our Services.
  </p>
  

</div>

`; 

ui.privacyPolicy = `
<div>
<h1><b>PRIVACY POLICY</b></h1>
<br></br>
<p><b>Information You Provide to Us.</b> 
We collect information you provide to us, such as when you create an account, update your profile, use the interactive features of our Services, or communicate with us. The types of information we may collect include basic user information, such as your name, username, gender, birth date, email address, mailing address, billing address, phone number and photographs. </p>
<br></br>
<p><b>Information We Collect Automatically.</b> 
When you access or use our Services, we may also automatically collect information about you, including:</p>
<p><li>Location Information: We may collect information about your location when you access our mobile application or website, or otherwise consent to the collection of this information.</li>
<li>Device Information: We collect device-specific information when you access our Services, including your hardware model, operating system and version, unique device identifiers, mobile network information and information about the device's interaction with our Services.</li>
<li>Log Information: We collect log information about how you access or use our Services, including your access times, browser type and language, Internet Service Provider and Internet Protocol (IP) address.</li>
<li>Information Collected by Cookies and other Tracking Technologies: We may automatically collect information using cookies, web beacons and other tracking technologies to, among other things, improve our Services and your experience, monitor user activity, count visits, understand usage and campaign effectiveness, and tell if an email has been opened and acted upon.</li></p>


</div>

`; 

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadFindHousing = function(){
    target.innerHTML = ui.findHousing;
    loadMaps();
  };

var loadSignIn = function(){
    //replacing login.html to enable transition from SignUp button to MyAccount page 16Nov amm
    target.innerHTML = ui.Login; //'<object type="text/html" data="../login.html" ></object>';
    //replacing login.html and login.js inline to enable transition from SignUp button to MyAccount page 16Nov amm
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const login    = document.getElementById('login');
    const signup   = document.getElementById('signup');
    const logout   = document.getElementById('logout');

   /*  // login
    login.addEventListener('click', e => {
        const auth  = firebase.auth();		
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => console.log(e.message));
    });

    // signup
    signup.addEventListener('click', e => {
        // TODO: check for real email
        const auth  = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
        promise.catch(e => console.log(e.message));
        loadMyAccount();  //amm 16nov load my account page after signup 
    });

    // logout
    logout.addEventListener('click', e => {
        firebase.auth().signOut();
    }); */

    // login state
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    email.placeholder = user.email;
                    email.value = user.email;
                } else {
                    email.placeholder = "Please Log In Before Updating Account!";
                }
            });
            logout.style.display = 'inline';
            login.style.display  = 'none';
            signup.style.display = 'none';
            password.style.display = 'none';

            logout.addEventListener('click', e => {
                firebase.auth().signOut();
            });
        }
        else{

            console.log('User is not logged in');
            logout.style.display = 'none';			
            login.style.display  = 'inline';
            signup.style.display = 'inline';

        
            // login
            login.addEventListener('click', e => {
                const auth  = firebase.auth();		
                const promise = auth.signInWithEmailAndPassword(email.value, password.value);
                promise.catch(e => console.log(e.message));
            });
        
            // signup
            signup.addEventListener('click', e => {
                // TODO: check for real email
                const auth  = firebase.auth();
                const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
                promise.catch(e => console.log(e.message));
                loadMyAccount();  //amm 16nov load my account page after signup 
            });
        }
    });
    
    

};

var loadRegister = function(){
    target.innerHTML = '<object type="text/html" data="../database.html" ></object>';
};

var loadOfferHousing = function(){

    // login state
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
            console.log(firebaseUser);
            
            target.innerHTML = '<object type="text/html" data="../host.html" width="483" height="1010"></object>';
		}
		else{
            console.log('User is not logged in');
            target.innerHTML = ui.LoggedOut;
		}
	});

   
};

var loadMyAccount = function(){
  
    // login state
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
            console.log(firebaseUser);
            
            target.innerHTML = ui.myAccount;
            const email    = document.getElementById('emailInput');
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    email.placeholder = user.email;
                    email.value = user.email;
                } else {
                    email.placeholder = "Please Log In Before Updating Account!";
                }
            });
		}
		else{
            console.log('User is not logged in');
            target.innerHTML = ui.LoggedOut;
		}
	});
    

};

var loadContactUs = function(){
    target.innerHTML = ui.contactUs;
};

var loadTermsConditions = function(){
    target.innerHTML = ui.termsConditions;
};

var loadPrivacyPolicy = function(){
    target.innerHTML = ui.privacyPolicy;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

var create = function(){
    var db = firebase.database();

    var email   = document.getElementById('emailInput');
	var firstname	= document.getElementById('firstName');
	var lastname   = document.getElementById('lastName');
	var phone  = document.getElementById('phoneNumber');
    var dob  = document.getElementById('DOB');
    
    var user = firebase.auth().currentUser;
    var id = user.uid;
    var postRef = db.ref('users/' + id);
    //var newPostRef = postRef.push();
        postRef.update({
			email : email.value,
			firstname : firstname.value,
			lastname : lastname.value,
			phonenumber : phone.value,
			dateofbirth : dob.value
        })
        .then(function(){
            acctstatus.innerHTML = "Account Updated!";
        });
    
};

defaultModule();
