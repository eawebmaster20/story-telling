import { Component } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
 constructor(public dataService:DataService){}
}
