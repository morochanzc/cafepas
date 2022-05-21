import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {


  // Configuración de Google Maps 
  center = {lat: 24, lng: 12};
  zoom = 15;
  display?: google.maps.LatLngLiteral;

  constructor() { }

  contact : {id: any, name: any, description: any, email: any} = {id: null, name: "", description: "", email: ""};

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.contact);
    
    this.contact = {id: null, name: "", description: "", email: ""};

  }

}
