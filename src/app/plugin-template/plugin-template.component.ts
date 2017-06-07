import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

import { Message } from '../message'

@Component({
  selector: 'plugin-template',
  templateUrl: 'plugin-template.component.html',
  styleUrls: ['plugin-template.component.css']
})

export class PluginTemplateComponent implements OnInit {
  constructor() {}

  @HostBinding('hidden')
  private isHidden: boolean = true;

  @Input()
  private message: Message

  @Output()
  private interceptor: EventEmitter<void> = new EventEmitter<void>()

  ngOnInit() {
    let text = this.message.text;
    if (text.startsWith("/")) {
      let command = text.slice(1, text.indexOf(" "))
      let value = text.slice(text.indexOf(" ") + 1)
      if(text.indexOf(" ") == -1) {
        command = text.slice(1)
        value = ""
      }
      this.intercept()
    }
  }

  intercept() {
    this.isHidden = false
    this.interceptor.emit()
  }
}
