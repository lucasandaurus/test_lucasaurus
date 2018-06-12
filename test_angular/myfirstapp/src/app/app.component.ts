import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title : string;
   // name o title funcionarian igual ya que son variables.;
   email : string;
   website:string;
   hobbies : string[];
showHobbies: boolean;

   constructor ()
{
  this.title ="my first app";
  this.email = "miemail@dominio.com";
this.website= "website.com.ar";
this.hobbies = ['leer', 'correr', 'futbol'];
this.showHobbies = false;
}

tooglehobbies() {
  this.showHobbies = !this.showHobbies;
}

newHobby(hobby) {
  this.hobbies.push(hobby.value);
console.log(hobby.value);
hobby.value='';
  return false;
}
}
