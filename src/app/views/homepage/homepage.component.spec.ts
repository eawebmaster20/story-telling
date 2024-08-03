import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomepageComponent } from './homepage.component';
import { Router } from '@angular/router';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageComponent, RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize without throwing exceptions', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should allow navigation to other routes when RouterLink is clicked', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const routerLink = compiled.querySelector('a[routerLink]');
    expect(routerLink).toBeTruthy();
    routerLink.click();
    fixture.whenStable().then(() => {
      const router = TestBed.inject(Router);
      expect(router.url).not.toBe('/');
    });
  });


  // RouterLink is correctly rendered in the template
  it('should render RouterLink in the template when instantiated', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a[routerlink]')).toBeTruthy();
  });

});
