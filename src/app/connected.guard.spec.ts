import { TestBed } from '@angular/core/testing';
import { ConnectedGuard } from './connected.guard';

describe('ConnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectedGuard],
    });
  });

  it('ConnectedGuard', () => {
    expect(ConnectedGuard).toBeTruthy();
  });
});

