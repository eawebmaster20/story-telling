import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from './data.service';
import { ApiService } from '../apiService/api.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Stories } from '../../interfaces/interfaces';

describe('DataService', () => {
  let service: DataService;
  // let apiService: jasmine.SpyObj<ApiService>;
  let apiService:any
  let router: Router;

  beforeEach(() => {
    // const apiSpy = jasmine.createSpyObj('ApiService', ['getStories']);
    const apiSpy = {
      getStories: jest.fn(),
      getAllStories:jest.fn()
    } as unknown as jest.Mocked<ApiService>;

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        DataService,
        { provide: ApiService, useValue: apiSpy }
      ]
    });

    service = TestBed.inject(DataService);
    // apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    apiService = TestBed.inject(ApiService) as jest.Mocked<ApiService>;
    router = TestBed.inject(Router);

    jest.spyOn(router, 'navigate');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all stories', () => {
    const mockStories: Stories = {
      "story1": {
        storyFileName: 'story1.json',
        description: 'Description of story1',
        coverImage: 'cover1.png',
        introVideo: 'intro1.mp4',
        initialScene: 'scene1',
        stats: {
          readBy: 100,
          rating: 4.5,
        }
      },
      "story2": {
        storyFileName: 'story2.json',
        description: 'Description of story2',
        coverImage: 'cover2.png',
        introVideo: 'intro2.mp4',
        initialScene: 'scene2',
        stats: {
          readBy: 150,
          rating: 4.8,
        }
      }
    };

    apiService.getStories.mockReturnValue(of(mockStories));
    localStorage.removeItem('stories')
    service.getAllStories();
    expect(apiService.getStories).toHaveBeenCalled();
    expect(service.stories).toEqual(mockStories);
    expect(localStorage.getItem('stories')).toEqual(JSON.stringify(mockStories));
  });

  it('should update selected story metadata', () => {
    const mockStories: Stories = {
      "story1": {
        storyFileName: 'story1.json',
        description: 'Description of story1',
        coverImage: 'cover1.png',
        introVideo: 'intro1.mp4',
        initialScene: 'scene1',
        stats: {
          readBy: 100,
          rating: 4.5,
        }
      },
      "story2": {
        storyFileName: 'story2.json',
        description: 'Description of story2',
        coverImage: 'cover2.png',
        introVideo: 'intro2.mp4',
        initialScene: 'scene2',
        stats: {
          readBy: 150,
          rating: 4.8,
        }
      }
    };

    service.stories = mockStories;

    service.updateSelectedMeta('story1');

    expect(service.selectedStoryMeta).toEqual(mockStories['story1']);
    expect(service.storyTitle).toEqual('story1');
    expect(localStorage.getItem('storyTitle')).toEqual(JSON.stringify('story1'));
    expect(router.navigate).toHaveBeenCalledWith(['/story-detail']);
  });
});
