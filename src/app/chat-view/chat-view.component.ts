import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message'

import { ChatHandlerService, AvatarUser } from '../chat-handler.service'
import { ChatCommunicationService } from '../chat-communication.service'


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  constructor(private chatService: ChatHandlerService, private chatCommunication: ChatCommunicationService,  private router: Router) { }

  ngOnInit() {
    this.chatService.connected().subscribe(value => {
      if (!value) {
        this.router.navigate(['/'])
      }
      this.connected = value
    })
    this.chatCommunication.messagesStream().subscribe(m => {
      setTimeout(() => this.messagesDiv.nativeElement.scrollTop = this.messagesDiv.nativeElement.scrollHeight, 50);
    })
  }

  @ViewChild('messagesDiv')
  private messagesDiv: ElementRef

  @ViewChild('textInput')
  private textInput: ElementRef

  private text: string = ""

  private connected: boolean

  private getMessages(): Array<Message> {
    return this.chatService.getMessages()
  }

  private getUsers(): Array<AvatarUser> {
    return this.chatService.avatarUsers
  }

  private send() {
    if (!this.text) {
      return
    }
    this.chatService.send(this.text)
    this.text = ""
    this.focusChatInput()
  }

  private focusChatInput() {
    setTimeout(() => this.textInput.nativeElement.focus(), 0)
  }

  private writeToChat(text: string) {
    if(this.text.slice(-1) != " ") {
      this.text += " "
    }
    this.text += text + " "
    this.focusChatInput()
  }
}
