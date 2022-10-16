let a;
let b;
let c;
let res;
let res2;
let dis;
let dis2;



document.getElementById("myButton").onclick = function(){

a= document.getElementById("a").value;


b= document.getElementById("b").value;


c= document.getElementById("c").value;


dis=b*b-(4*a*c);



if(dis<0){
   
   dis2=Math.sqrt(dis);
   
   document.getElementById("result").innerHTML = "Výsledek: "+"Rovnice nemá výsledek.";
}else if(dis==0){
    dis2=Math.sqrt(dis);
    
    res = -b/(2*a);
    document.getElementById("result").innerHTML = "Výsledek: x="+res;

}else if(dis>0){
    dis2=Math.sqrt(dis);
    res = (-b+dis2)/2*a;
    res2 = (-b-dis2)/2*a;
    document.getElementById("result").innerHTML = "Výsledek: x1="+res;
    document.getElementById("result2").innerHTML = "Výsledek: x2="+res2;
    console.log(res);
}   


}