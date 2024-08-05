import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { Stories } from '../../interfaces/interfaces';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });


  test('should test return value of getOneStory', ()=>{
    const mockStory = {
      "Green Knight Story": {
      "scenes": {
        "initialScene": {
          "id": "initialScene",
          "title": "The round table chooses you sir Pk",
          "image": "../assets/TheGreenNight/roundtable.jpg",
          "description": "You are tasked with rescuing Princess Harriet from the evil dragon. As a known brave knight, all eyes are on you. Would you accept the deadly task or will you Hesitate?",
          "decisions": [
            {
              "choice": "A",
              "text": "Accept the quest",
              "nextScene": "dressingScene"
            },
            {
              "choice": "B",
              "text": "Hesitate",
              "nextScene": "angrykingScene"
            }
          ]
        },
        "roundtableScene2": {
          "id": "roundtableScene2",
          "title": " Restoring Honor",
          "image": "../assets/TheGreenNight/roundtable2.jpg",
          "description": "Sir PK, eager to restore his honor, speaks to the king with fervor. “I seek to amend my mistake,” he says earnestly, pledging to take on the quest. His heartfelt words and renewed commitment aim to mend the rift and regain the king’s trust and respect",
          "decisions": [
            {
              "choice": "A",
              "text": "Accept the quest",
              "nextScene": "dressingScene"
            },
            {
              "choice": "B",
              "text": "Hesitate",
              "nextScene": "angrykingScene"
            }
          ]
        }
      }
    }};
    const param = 'story1'
    service.getOneStory = jest.fn().mockReturnValue(of(mockStory));

    service.getOneStory(param).subscribe((result) => {
      return expect(result).toEqual(mockStory);
    });
  
    expect(service.getOneStory).toHaveBeenCalledWith(param);
  })
  test('should test return value of getStories', ()=>{
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
    service.getStories = jest.fn().mockReturnValue(of(mockStories));

    service.getStories().subscribe((result) => {
      return expect(result).toEqual(mockStories);
    });
  
    expect(service.getStories).toHaveBeenCalled();
  })
});
