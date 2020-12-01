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
                    <a class="dropdown-item" href="#">Contact Us</a>
                    <a class="dropdown-item" href="#">Privacy Policy</a>
                    <a class="dropdown-item" href="#">Terms & Conditions</a>
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
<h1>Welcome to HomeBase</h1>
  <p>We are centralized resource for finding and offering temporary, safe housing options in the aftermath of a disaster event.</p>
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
                        <button type="submit" class="btn btn-light" onclick="create()">Update account</button>
                    </div>
                </div>
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
            
            target.innerHTML = '<object type="text/html" data="../host.html" width="500" height="500"></object>';
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

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
