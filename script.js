



document.getElementById("myButton").onclick = function(){

    let a;
    let b;
    let c;
    let res;
    let res2;
    let dis;
    let dis2;

a= document.getElementById("a").value;


b= document.getElementById("b").value;


c= document.getElementById("c").value;


dis=b*b-(4*a*c);



if(dis<0){
   
   dis2=Math.sqrt(dis);
   
   document.getElementById("result").innerHTML = "Výsledek: "+"Rovnice nemá výsledek.";
   document.getElementById("result2").innerHTML = "";
}else if(dis==0){
    dis2=Math.sqrt(dis);
    
    res = -b/(2*a);
    document.getElementById("result").innerHTML = "Výsledek: x="+res;
    document.getElementById("result2").innerHTML = "";
}else if(dis>0){
    dis2=Math.sqrt(dis);
    res = (-b+dis2)/2*a;
    res2 = (-b-dis2)/2*a;
    document.getElementById("result").innerHTML = "Výsledek: x1="+res;
    document.getElementById("result2").innerHTML = "Výsledek: x2="+res2;
    console.log(res);
}   


}

document.getElementById("myButton2").onclick = function(){


    let result1 = "";
    let result2  = "";
    


    let name = document.getElementById("name").value;
   
    
    for(let i = 0; i<=name.length; i++){

        
        result1 +=name.substring(0,i)+"<br>";
        
    }

    for(let j = name.length; j>=0; j--){

        
    
        
        result2 +=name.substring(0,j)+"<br>";
        
    }
   
console.log(result1);
console.log(result2);
    document.getElementById("res1").innerHTML = result1+result2;
    





}

document.getElementById("myButton3").onclick = function(){
 let number = document.getElementById("rocol").value;
 console.log(number);
 
 let name = document.getElementById("name2").value;
 console.log(name);

 let result = "";

 for(let i = 0; i<number; i++){

    for(let  j= 0; j<number; j++){


    result+= name+" ";
    }
    result+= "<br>"


 }
 console.log(result);

 document.getElementById("res2").innerHTML = result; 



 





}