import { TestBed } from '@angular/core/testing';

import { GuardianFirestoreService } from './guardian-firestore.service';

describe('GuardianFirestoreService', () => {
  let service: GuardianFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardianFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
