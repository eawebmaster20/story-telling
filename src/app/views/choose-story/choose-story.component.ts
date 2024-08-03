import { Component, CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/dataService/data.service';


@Component({
  selector: 'app-choose-story',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './choose-story.component.html',
  styleUrl: './choose-story.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChooseStoryComponent {
  storyList: string[] = [];
  storyImgUrl: string = '';
  constructor(public dataService:DataService){
    this.storyList = Object.keys(dataService.stories);
  }


}
