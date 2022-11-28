import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor(){}

  ngOnInit(): void {
      
  }

  hiddenAge(): void {
    console.log('Fonction hiddenAge');
    let p = document.getElementById('lastP');
    console.log(p?.hidden);
    if(p?.hidden === false){
      p.style.visibility = 'hidden';
      console.log(p);
    }
  }


}
