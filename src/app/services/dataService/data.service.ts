import { Injectable } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { Scene, Stories, Story, StoryMeta } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  choicesMade = 0;
  pageCount = 0;
  storyTitle: string = '';
  stories: Stories = {};
  selectedStoryMeta:StoryMeta={
    storyFileName:'',
    description: '',
    coverImage: '',
    introVideo: '',
    initialScene: '',
    stats: {
      readBy: 0,
      rating: 0,
    }
  }
  selectedStory: Story = {  };
  selectedScene: Scene = {
    decisions: [],
    description: '',
    id: '',
    image: '',
    title: '',
  };
  selectedSceneKey: string = '';
  constructor(public api: ApiService, private router:Router) {}
  getAllStories() {
    this.api.getStories().subscribe((res) => {
      console.log(res);
      this.stories = res;
      localStorage.setItem('stories',JSON.stringify(this.stories))
    });
  }

  selectedChoices:string[] = []
  
  updateSelectedMeta(selectedMeta: string) {
    this.selectedStoryMeta = this.stories[selectedMeta];
    this.storyTitle = selectedMeta;
    localStorage.setItem('storyTitle',JSON.stringify(this.storyTitle));
    console.log(selectedMeta,this.selectedStoryMeta);
    this.router.navigate(['/story-detail'])
  }
  
}
