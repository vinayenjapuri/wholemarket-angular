import { TestBed } from '@angular/core/testing';

import { WholemarketPanelService } from './wholemarket-panel.service';

describe('WholemarketPanelService', () => {
  let service: WholemarketPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WholemarketPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
