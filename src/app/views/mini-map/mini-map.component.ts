import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-mini-map',
  standalone: true,
  imports: [],
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.scss'
})
export class MiniMapComponent {
  constructor(private router: Router,public data:DataService){}

  mainmenu(){
    this.router.navigate(['/']);
  }
}
