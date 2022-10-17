let arry = [];
var values = 30;
var valuePrint = "*";

for (let i = 0 ; i <values ; i++){
    for (let l = 0 ; l <i; l++){   
       var m = ""
      
       for(let b = values;  b > 0; b--){
          m  += " " + "";
         }

         

        if(values < 10){
        arry.push("I");
        }
        else if (values < 20){
         arry.push("L");
        }
        else{
         arry.push("A");
        }

        values = values-1;
         arry[0] = m;

        console.log(""+arry);
   
       }  
}

for (let k= arry.length ; k >0; k--){
 
   if(values >10){
      arry.pop("A");
      }
      else if (values >20){
       arry.pop("L");
      }
      else{
       arry.pop("I");
      }
      m  += " " + "";
      arry[0] = m;
   

  console.log(""+arry);

  }

