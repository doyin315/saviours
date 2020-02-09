import { Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  lat: number = 6.6244;
  lng: number = 3.3692;
  constructor() { }
  zoom = 11;
  locations = [
  {lat: 6.5144, lng: 3.3792},
  {lat: 6.5244, lng: 3.3192},
  {lat: 6.5005, lng: 3.3666},
  {lat: 6.6154, lng: 3.3238},
  {lat: 6.4698, lng: 3.5852},
  {lat: 6.6018, lng: 3.3515},
  {lat: 6.5113, lng: 3.662905},
  {lat: 6.4572, lng: 3.699196},
  {lat: 6.728611, lng: 3.790222},
  {lat: 6.650000, lng: 3.116667},
  {lat: 6.559859, lng: 3.128708},
  {lat: 6.465015, lng: 3.133858},
  {lat: 6.770104, lng: 3.143299},
  {lat: 6.773700, lng: 3.145187},
  {lat: 6.774785, lng: 3.137978},
  {lat: 6.819616, lng: 3.968119},
  {lat: 6.630766, lng: 3.695692},
  {lat: 6.927193, lng: 3.053218},
  {lat: 6.530162, lng: 3.865694},
  {lat: 6.734358, lng: 3.439506},
  {lat: 6.734358, lng: 3.501315},
  {lat: 6.735258, lng: 3.438000},
  {lat: 6.999792, lng: 3.463352}
  ]

}

