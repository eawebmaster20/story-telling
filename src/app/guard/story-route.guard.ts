import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/dataService/data.service';


@Injectable({
  providedIn: 'root'
})

export class storyRouteGuard implements CanActivate{
  constructor(private dataService: DataService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.dataService.selectedStoryMeta.initialScene ){
      if(localStorage.getItem('initialScene')?.length){
        this.dataService.stories = JSON.parse(localStorage.getItem('stories')!);
        this.dataService.selectedStoryMeta.initialScene = JSON.parse(localStorage.getItem('initialScene')!)
        this.dataService.storyTitle = JSON.parse(localStorage.getItem('storyTitle')!)
      }
    }
    if(this.dataService.stories && this.dataService.selectedStoryMeta.initialScene){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
