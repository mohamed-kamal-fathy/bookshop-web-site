        //for scrolling 
    
     
        window.onscroll = function(){
   
          if (window.pageYOffset >100) {
   
              nav.style.background ="#353755";
              nav.style.boxShadow = "  0 0 50px #0052ff";
              nav.style.color="#4f798d";
          }
          else{
              nav.style.background = "transparent";
              nav.style.boxShadow = "none";
          }
        };
   //   ***************************************************************
  