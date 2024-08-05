import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { storyRouteGuard } from './story-route.guard';
import { DataService } from '../services/dataService/data.service';
import { ApiService } from '../services/apiService/api.service';


describe('storyRouteGuard', () => {
  let guard: storyRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        storyRouteGuard,
        DataService,
        ApiService,
        { provide: Router, useValue: {} },
      ],
    });
    guard = TestBed.inject(storyRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be provided with DataService', () => {
    expect(guard['dataService']).toBeTruthy();
  });


});
