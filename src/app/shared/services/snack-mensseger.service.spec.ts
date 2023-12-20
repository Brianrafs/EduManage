import { TestBed } from '@angular/core/testing';

import { SnackMenssegerService } from './snack-mensseger.service';

describe('SnackMenssegerService', () => {
  let service: SnackMenssegerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackMenssegerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
