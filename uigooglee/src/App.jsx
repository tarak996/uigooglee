import React from 'react';


class App  {
  render() {
    return (
      <div className="App">
      
    
    


<head>
<title>Google Homepage</title>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>

<header>
  <nav>
    <ul id="nav_bar">
      <li class="nav-links" id="gmail"><a href="#">Gmail</a></li>
      <li class="nav-links"><a href="#">Images</a></li>
      <li id="sign_in"><a href="#">Sign In</a></li>
    </ul>  
  </nav>  
</header>  

<!-- GOOGLE IMG -->  
<div class="google">
  <a href="#" id="google_logo"><img src="http://i1381.photobucket.com/albums/ah215/mzartdesigns/google-logo_zpspkcztsjo.png" alt=" photo google-logo_zpspkcztsjo.png"/></a>
</div>


<!-- FORM SEARCH -->  
<div class="form">  
  <form>
    <label for="form-search"></label>
    <input id="icon_prefix" type="text" class="validate" />
  </form>
</div>  

<!-- BUTTONS -->



<tb>
      <button >
        < a href="google" > Google Search</a>
        </button>
      </tb>
      <tb>
      <button>
        <a href="google" > I'm Feeling Lucky</a></button>
      </tb>
      




  
<!-- FOOTER -->
<footer>
    <ul class="footer-left">
      <li><a href="#">Advertising</a></li>
      <li><a href="#">Business</a></li>
      <li><a href="#">About</a></li> 
    </ul>
    <ul class="footer-right">    
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Settings</a></li>
    </ul>       
</footer>      


);
  }
}

export default App;