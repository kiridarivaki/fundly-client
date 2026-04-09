import { TestBed } from '@angular/core/testing';

import { ExpenseClientService } from './expense-client.service';

describe('ExpenseClientService', () => {
  let service: ExpenseClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
