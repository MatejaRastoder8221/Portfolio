window.onload = function(){
    let html=` <div class="container">
    <img class="d-inline-block align-top" width="30px"src="images/01white.png" alt="logo">
    <button 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    class="navbar-toggler" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
        Menu
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" id="pocetna">
        <ul>
            <li><a class="nav-link" href="#content1">PCBuilds</a></li>
            <li><a class="nav-link" href="#content2">Design</a></li>
            <li><a class="nav-link" href="#content3">Skills</a></li>
            <li><a class="nav-link" href="#contactform">Collab</a></li>
        </ul>
        </ul></div></div>`
    $("#navigation").html(html);
}



