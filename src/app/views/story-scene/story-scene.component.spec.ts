import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorySceneComponent } from './story-scene.component';
import { DataService } from '../../services/dataService/data.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core'

describe('StorySceneComponent', () => {
  let component: StorySceneComponent;
  let fixture: ComponentFixture<StorySceneComponent>;
  let dataService: DataService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: DataService, useValue: { selectedStory: {}, storyTitle: 'Green Knight Story', selectedChoices: [] } },
        { provide: Router, useValue: { navigate: jest.fn() } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StorySceneComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });


  test('should display scene', () => {
    const mockScene = {
      id: 'initialScene',
      title: 'The round table chooses you sir Pk',
      image: '../assets/TheGreenNight/roundtable.jpg',
      description: 'You are tasked with rescuing Princess Harriet...',
      decisions: [
        { choice: 'A', text: 'Accept the quest', nextScene: 'dressingScene' },
        { choice: 'B', text: 'Hesitate', nextScene: 'angrykingScene' }
      ]
    };

    component.storyText = { nativeElement: { textContent: '' } } as ElementRef;
    component.choices = { nativeElement: { style: { display: '' } } } as ElementRef;
    component.next = { nativeElement: { style: { display: '' }, onclick: null } } as ElementRef;
    component.displayScene(mockScene);

    expect(component.sceneTitle).toBe(mockScene.title);
    expect(component.sceneImage).toBe(mockScene.image);
    expect(component.texts).toEqual([mockScene.description]);
    expect(component.choiceA).toBe(mockScene.decisions[0].text);
    expect(component.choiceB).toBe(mockScene.decisions[1].text);
  });



});
