import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-1';

//   // fruits=['apple','banana','pineapple']
//   info=[
//     {name:"abhi",Email:"abhiram@gmail.com",age:"29"},
//     {name:"kali",Email:"abhiram@gmail.com",age:"30"},
//     {name:"ram",Email:"abhiram@gmail.com",age:"27"},
//     {name:"joshi",Email:"abhiram@gmail.com",age:"24"}
//   ]

//   nums=['s','a','c','d','r']

//   table=['abhi','Raju','santhosh','Dileep','Ramesh','ram']

//   veg=[
//     {name:'bringle',cost:'25'},
//     {name:'tamota',cost:'20'},
//     {name:'potota',cost:'40'},
//     {name:'mirchi',cost:'30'},
//     {name:'kaddu',cost:'45'},
//     {name:'onion',cost:'15'}
//   ]

//   mobile=['apple','oppo','oneplus','vivo']


//   // stringbing:string="This is H1 tag by string interpolation method";
//   // d:string=new Date().toLocaleTimeString();
//   // timeId=setInterval(()=>this.d=new Date().toLocaleTimeString(),1000);

//   // aj:string=new Date().toLocaleTimeString();
//   // ak=setInterval(()=>this.aj=new Date().toLocaleTimeString(),1000)
  
  
// buyvegitable(amount: number, listvegitable:[]){
//   var a=20, b=50, c=30
//   let totalcost= a+b+c;
//   return amount-totalcost;
// }

// multiplynumbers(a:number,b:number){
//  var result=a*b;
//  return result;
// }
// substract(a:number,b:number){
//   var sub=a-b;
//   return sub;
// }
// addition(a:number,b:number){
//   var add=a+b;
//   return add;
// }

// abhi(a:number, b:number){
//   var addd=a+b;
//   return addd;
// }

// buypens(cost:number, pens:[]){
//   let p=10, r=50, o=60
//   let total=p+r+o;
//   return cost-total;
// }

// findbignumber(num1:number,num2:number){
//   let bignumber=0;
//   if(num1>num2){
//     return bignumber=num1;
//   }
//   else{
//     return bignumber=num2;
//   }
// }
 
// findifevennumber(f:any){
//   if(f%2==0){
//     return "even";
//   }
//   else{
//     return "odd";
//   }   
// }



// checksquare(length:number, width:number){
//   if(length==width){
//     return "square";
//   }
//   else{
//     return "Rectangle";
//   }
// }

// converttostring(input:number){
//   if(input==1){
//     return "One";
//   }
//   else if(input==2){
//     return "Two";
//   }
//   else if(input==3){
//     return "Three";
//   }
//   else if(input==4){
//     return "Four";
//   }
//   else if(input==5){
//     return "Five";
//   }
//   else{
//     return "";
//   }
  
// }



// constructor(){
//   // let output=this.multiplynumbers(6,8)
//   // alert(output)
//   // let output1=this.substract(50,20)
//   // alert(output1)
//   // let output2=this.addition(50,50)
//   // console.log(output2)
//   // let remainingamount=this.buyvegitable(500, [])
//   // alert(remainingamount)
//   // let result=this.abhi(5000,6000)
//   // alert(result)
//   // let output3=this.buypens(200,[])
//   // alert(output3)
//   // console.log(output3)
//   // let result1=this.findbignumber(90,95)
//   // console.log(result1)
//   // let result2=this.findifevennumber(8)
//   // alert(result2)
//   // let check=this.checksquare(8,8)
//   // alert(check)
//   // console.log(check)

//   let convertedValue=this.converttostring(3)
//   console.log(convertedValue)

// }


firstInput:any=""
secondInput:any=""
total:any=""
onClickTotal(event:any){
  this.total=this.firstInput*this.secondInput
}

addDetails:any=[]

onAdd(event:any){
  let details={
    "NoOfLitres":this.firstInput,
    "CostPerLitre":this.secondInput,
    "Total":this.total
  }
  this.addDetails.push(details)
}





}


