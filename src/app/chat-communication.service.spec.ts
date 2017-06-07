import { TestBed } from '@angular/core/testing';
import { ChatCommunicationService } from './chat-communication.service';

describe('ChatCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatCommunicationService],
    });
  });

  it('ChatCommunicationService', () => {
    expect(ChatCommunicationService).toBeTruthy();
  });
});

