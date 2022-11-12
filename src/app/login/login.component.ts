import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//ethilanu Ts te ella codeum kodukkuka
acno:any
password:any

aim='your perfect banking patner'
data='enter acno'

userDetails:any={
1000:{acno:1000,username:"amal",password:123,balance:0},
1001:{acno:1001,username:"anu",password:123,balance:0},
1002:{acno:1002,username:"arun",password:123,balance:0},
1003:{acno:1003,username:"mega",password:123,balance:0}
}
  constructor() { }

  ngOnInit(): void {
  }
login(){
var acno=this.acno
var password=this.password
var userdetails=this.userDetails
if(acno in userdetails){
if(password==userdetails[acno]['password']){
alert('login success')
}
else{
alert('inncorrect password')
}
}
else{
alert('user not exist')
}

alert("login clicked")
}
acnoChange(event:any){
this.acno=event.target.value
// console.log(event.target.value);

}
passwordChange(event:any){
this.password=event.target.value
// console.log(event.target.value);

}
}
