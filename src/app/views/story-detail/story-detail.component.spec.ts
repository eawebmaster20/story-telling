import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryDetailComponent } from './story-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('StoryDetailComponent', () => {
  let component: StoryDetailComponent;
  let fixture: ComponentFixture<StoryDetailComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoryDetailComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(StoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // showPreviewModal method sets showPreviewMoal to true
  it('should set showPreviewMoal to true when showPreviewModal is called', () => {
    const component = new StoryDetailComponent({} as any);
    component.showPreviewModal();
    expect(component.showPreviewMoal).toBe(true);
  });
});
