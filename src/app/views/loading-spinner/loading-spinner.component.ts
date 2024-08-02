import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {
  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getSelectedStory();
  }

  getSelectedStory() {
    this.dataService.api
      .getOneStory(this.dataService.selectedStoryMeta.storyFileName)
      .subscribe((res) => {
        this.dataService.selectedStory = res;
        localStorage.setItem(
          'selectedStory',
          JSON.stringify(this.dataService.selectedStory)
        );
        setTimeout(() => {
          this.router.navigate(['/story-scene']);
        }, 4000);
      });
  }
}
