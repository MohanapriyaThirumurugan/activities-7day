// c) print the following details name ,capital,flag using forEach method
const data=new XMLHttpRequest();
data.open("GET","https://restcountries.com/v3.1/all","true");
data.send();
data.onload=function(){
    const data1=data.response;
   // console.log(data1);
    //conver raw to parse
    const result1=JSON.parse(data1);
    console.log(result1);
    const res=result1.forEach((ele)=>console.log(`capital:${ele.capital}name:${ele.name.common},flag:${ele.flag}`))

}

/// b)fliter
const data1=new XMLHttpRequest();
data1.open("GET","https://restcountries.com/v3.1/all","true");
data1.send();
data1.onload=function(){
    const data2=data1.response;
  // console.log(data1);
     //conver raw to parse
    const result2=JSON.parse(data2);
 console.log(result2)
 const res2= result2.filter((y)=>y.population<200000)
 var res3=res2.map((ele2)=>console.log(ele2.name.common))
}

// a)print the region and contient using filter and map
const data2=new XMLHttpRequest();
data2.open("GET","https://restcountries.com/v3.1/all","true");
data2.send();
data2.onload=function(){
    const data3=data2.response;
  // console.log(data1);
     //conver raw to parse
    const result3=JSON.parse(data3);
 console.log(result3)
 const res2= result3.filter((y2)=>y2.region==="Asia")
 var res3=res2.map((ele3)=>console.log(ele3.name.common))
}

// d)total country population using reduce
const data3=new XMLHttpRequest();
data3.open("GET","https://restcountries.com/v3.1/all","true");
data3.send();
data3.onload=function(){
    const data4=data3.response;
   //console.log(data4);
     //conver raw to parse
    const result3=JSON.parse(data4);
 console.log(result3)
 const res4=result3.map((ele4)=>ele4.population)
//console.log(res4);
const yy2=res4.reduce((a,b)=>{
  return a+b;


},0)
 console.log(yy2);

} 

// e)print the country that uses us doller as currency
const data4=new XMLHttpRequest();
data4.open("GET","https://restcountries.com/v3.1/all","true");
 data4.send();
 data4.onload=function(){
    const data5=data4.response;  
      //console.log(data5);
      //conver raw to parse
    const result5=JSON.parse(data5);
 console.log(result5);
 const yy3=result5.filter((ele8)=>{
  
  return ele8.currencies!==undefined

 })
  console.log(yy3);
  
  const yy01=yy3.map((ele8)=>{
  if(ele8.currencies.hasOwnProperty("USD")){
    console.log(ele8.name.common);
    //return ele8.name.common
  }
   //console.log(yy01);
   })
   //console.log(yy01);
 
 }


 
 


 

