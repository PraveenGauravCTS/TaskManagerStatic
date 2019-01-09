import { TestBed, inject } from '@angular/core/testing';

import { TaskmanagerService } from './taskmanager.service';

describe('TaskmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskmanagerService]
    });
  });

  it('should be created', inject([TaskmanagerService], (service: TaskmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
