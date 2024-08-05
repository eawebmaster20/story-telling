import { TestBed, fakeAsync, tick  } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule,HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Verify ngOnInit is called upon component initialization
  it('should call the getAllStories on DataService when initiliazed', () => {
    const dataServiceMock = {
      getAllStories: jest.fn()
    };
    const rendererMock = {
      createElement: jest.fn().mockReturnValue(document.createElement('div')),
      addClass: jest.fn(),
      setStyle: jest.fn(),
      removeChild: jest.fn(),
    }
    const component = new AppComponent(dataServiceMock as any, rendererMock as any);
    component.ngOnInit();
    expect(dataServiceMock.getAllStories).toHaveBeenCalled();
  })

  // Check if createTrailContainer is called within ngOnInit
  it('should call createTrailContainer within ngOnInit', () => {
    const dataServiceMock = {
      getAllStories: jest.fn()
    };
    const rendererMock = {
      createElement: jest.fn().mockReturnValue(document.createElement('div')),
      addClass: jest.fn(),
      appendChild: jest.fn(),
      setStyle: jest.fn(),
      removeChild: jest.fn()
    };
    document.body.appendChild = jest.fn();
    const component = new AppComponent(dataServiceMock as any, rendererMock as any);
    component.ngOnInit();
    expect(rendererMock.createElement).toHaveBeenCalledWith('div');
  });

  // Confirm no errors are thrown during component initialization
  it('should not throw errors during component initialization', () => {
    const dataServiceMock = {
      getAllStories: jest.fn()
    };
    const rendererMock = {
      createElement: jest.fn().mockReturnValue(document.createElement('div')),
      addClass: jest.fn(),
      setStyle: jest.fn(),
      removeChild: jest.fn()
    };
    const component = new AppComponent(dataServiceMock as any, rendererMock as any);
    expect(() => {
      component.ngOnInit();
    }).not.toThrow();
  });

  // DataService.getAllStories fails or returns an error
  it('should handle error when getAllStories fails', () => {
    const dataServiceMock = {
      getAllStories: jest.fn().mockImplementation(() => {
        throw new Error('Failed to fetch stories');
      })
    };
    const rendererMock = {
      createElement: jest.fn().mockReturnValue(document.createElement('div')),
      addClass: jest.fn(),
      setStyle: jest.fn(),
      removeChild: jest.fn()
    };
    const component = new AppComponent(dataServiceMock as any, rendererMock as any);
    expect(() => component.ngOnInit()).toThrow('Failed to fetch stories');
  });
});
