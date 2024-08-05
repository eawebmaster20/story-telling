import { Component } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';
import { RouterLink } from '@angular/router';
import { PreviewModalComponent } from '../preview-modal/preview-modal.component';
@Component({
  selector: 'app-story-detail',
  standalone: true,
  imports: [RouterLink, PreviewModalComponent],
  templateUrl: './story-detail.component.html',
  styleUrl: './story-detail.component.scss',
})
export class StoryDetailComponent {
  // data will be fetched dynamically
  constructor(public storyData:DataService){
    // console.log("story: ",this.storyData.selectedStoryMeta)
  }

  showPreviewMoal = false;

  showPreviewModal() {
    // console.log('show preview modal');
    this.showPreviewMoal = true;
  }

  closePreviewModal() {
    this.showPreviewMoal = false;
  }
}
