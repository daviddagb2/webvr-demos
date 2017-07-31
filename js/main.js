var x = -1;
var y = 0; 
var z = -3;

function init_rotation(){
  
  

  
  
  var valuePos =  x + " " + y + " " + z + "";
  
  for(var i = 0; i<= 100; i++){
    
    x = x + 1;
    valuePos =  x + " " + y + " " + z + "";
  
    console.log(valuePos);
    cube_rotate("#box01", "position", valuePos); 
   // sleep(1000);
       
         
    }//End for
  
  }


function cube_rotate(id, tag, value){
  
   $(id).attr(tag, value);
  
}

