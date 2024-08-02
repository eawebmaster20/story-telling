import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
