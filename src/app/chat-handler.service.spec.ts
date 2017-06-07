import { TestBed } from '@angular/core/testing';
import { ChatHandlerService } from './chat-handler.service';

describe('ChatHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatHandlerService],
    });
  });

  it('ChatHandlerService', () => {
    expect(ChatHandlerService).toBeTruthy();
  });
});

