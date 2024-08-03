import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { ApiService } from '../apiService/api.service';
import { of } from 'rxjs';
import { MockInstance } from 'jest-mock';
import { Story } from '../../interfaces/interfaces';

describe('DataService', () => {
  let service: DataService;
  let apiServiceSpy: jest.Mocked<ApiService>;

  beforeEach(() => {
    apiServiceSpy = {
      getStories: jest.fn().mockReturnValue(of({ one: "dijjo" })),
      getOneStory: jest.fn().mockReturnValue(of({ title: "Mock Story" } as unknown as Story))
    } as unknown as jest.Mocked<ApiService>;

    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    });

    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add more tests as needed
});
