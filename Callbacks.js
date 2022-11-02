function one(){
    console.log("1");
}
function two(callback){
    setTimeout(()=>{
        console.log("2");
        callback();
    },0);
    
   
}
function three(){
    console.log("3");
}


one();
//passing three as callback // function defination which get function as argument are called higher order function 
two(three);
//three();