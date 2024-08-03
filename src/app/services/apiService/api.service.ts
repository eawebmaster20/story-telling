import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stories, Story } from '../../interfaces/interfaces';
// import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getStories(){
    return this.http.get<Stories>('assets/all_stories.json')
  }
  getOneStory(fileName:string){
    return this.http.get<Story>(`assets/stories/${fileName}.json`)
  }
}
