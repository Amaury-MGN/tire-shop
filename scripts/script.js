// functions launching at the start of all the page
loggedIn()

// ___________________________________________________

// functions witch need an activation (button, other function etc) to start
    function loggedIn(){
        let storage = localStorage.getItem("logIn")
        if (storage == 'true') {
            document.getElementById("logOut").style.display = "block";
            // document.getElementById("logOut").style.display = "none";
            logIn();
        }
    }
    function logIn() {
        localStorage.setItem("logIn", true);
        var log, profil, parent;

        //Get the original log
        log = document.getElementById("changeLogFalse")
        //Assuming it exists...
        if (log) {
            
            //Get its parent
            parent = log.parentNode;

            //Create the new log
            profil = document.createElement('a');
            

            //Set its ID and content
            profil.id = "changeLogFalse";
            profil.setAttribute('href', "./profil.html");
//          window.location.href = "./profil.html";
            profil.innerHTML = "Mon Profil";

            //Insert the new one in front of the old one (this temporarily
            //creates an invalid DOM tree [two logs with the same ID],
            //but that's harmless because we're about to fix that).
            parent.insertBefore(profil, log);

            //Remove the original
            parent.removeChild(log);
        }
    };
    function loggedOut() {
        localStorage.removeItem("logIn")
        if (storage == 'true') {   
            document.getElementById("logOut").style.display = "none";
        }
    }