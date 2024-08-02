import { Routes } from '@angular/router';
import { storyRouteGuard } from './guard/story-route.guard';
import { MiniMapComponent } from './views/mini-map/mini-map.component';

export const routes: Routes = [
  // {path:'', component:MiniMapComponent},
  {
    path: 'story-detail',
    loadComponent: () =>
      import('./views/story-detail/story-detail.component').then(
        (m) => m.StoryDetailComponent
      ),
      canActivate:[storyRouteGuard],
  },
  {
    path: 'choose-story',
    loadComponent: () =>
      import('./views/choose-story/choose-story.component').then(
        (m) => m.ChooseStoryComponent
      ),
  },
  {
    path: 'story-scene',
    loadComponent: () =>
      import('./views/story-scene/story-scene.component').then(
        (m) => m.StorySceneComponent
      ),
      canActivate:[storyRouteGuard],
  },
  {
    path: 'loading-spinner',
    loadComponent: () =>
      import('./views/loading-spinner/loading-spinner.component').then(
        (m) => m.LoadingSpinnerComponent
      ),
      canActivate:[storyRouteGuard],
  },
  {
    path: 'mini-map',
    loadComponent: () =>
      import('./views/mini-map/mini-map.component').then(
        (m) => m.MiniMapComponent
      ),
      canActivate:[storyRouteGuard],
  },
  { path: '**',
    loadComponent: ()=>
     import ('./views/homepage/homepage.component').then(
      (m) => m.HomepageComponent
     )
  },
];
