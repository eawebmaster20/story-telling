import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { StorySceneComponent } from './story-scene.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StorySceneComponent', () => {
  let component: StorySceneComponent;
  let fixture: ComponentFixture<StorySceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorySceneComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should return sceneID', () => {
    expect(component.getSceneById('roundtableScene')).toEqual(
      'roundtableScene'
    );
  });

  test('should return sceneID', () => {
    component.displayScene('roundtableScene');
    expect(component.sceneId).toEqual('roundtableScene');
  });
  test('should return scene image url', () => {
    component.displayScene('roundtableScene');
    expect(component.sceneImage).toBeTruthy();
  });
  test('should return scene title', () => {
    component.displayScene('roundtableScene');
    expect(component.sceneTitle).toBeTruthy();
  });
  test('should return scene description', () => {
    component.displayScene('roundtableScene');
    expect(component.sceneDescription).toBeTruthy();
  });
  test('should return choiceA', ()  => {
    component.displayScene('roundtableScene');
    expect(component.choiceA).toBeTruthy();
  });
  test('should return choiceB', () => {
    component.displayScene('roundtableScene');
    expect(component.choiceB).toBeTruthy();
  });
  
});
