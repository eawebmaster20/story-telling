import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChooseStoryComponent } from './choose-story.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChooseStoryComponent', () => {
  let component: ChooseStoryComponent;
  let fixture: ComponentFixture<ChooseStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseStoryComponent,RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
