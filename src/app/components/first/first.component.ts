import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile;

  studentid: string;
  name: string;
  gender: string;
  year: number;
  email: string;
  phone: string;
  address: string;
  comment: string;

  constructor() { 
    this.profile = {
      studentid: '',
      name: '',
      gender: '',
      birthyear: 0,
      email: '',
      phone: '',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    this.studentid = "B6007317";
    this.name = "Jakkrit Thuekmon";
    this.gender = "Male";
    this.year = 1998;
    this.email = "b6007317@g.sut.ac.th";
    this.phone = "097-9852395";
    this.address = "Lampang";
  }
onClick(){
  alert(this.address);
}
 
}
