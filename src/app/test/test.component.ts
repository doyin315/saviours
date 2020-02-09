import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  crimes;
  constructor(private service: AuthService) { }

  ngOnInit() {
    this.service.getdata().subscribe( data => {
      this.crimes = data;
    })
  }

}
