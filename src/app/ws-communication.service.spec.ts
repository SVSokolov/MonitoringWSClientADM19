import { TestBed } from '@angular/core/testing';

import { WsCommunicationService } from './ws-communication.service';

describe('WsCommunicationService', () => {
  let service: WsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
