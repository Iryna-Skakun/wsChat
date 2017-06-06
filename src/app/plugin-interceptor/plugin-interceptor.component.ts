import { Component, OnInit } from '@angular/core';

import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-interceptor',
  templateUrl: 'plugin-interceptor.component.html',
  styleUrls: ['plugin-interceptor.component.css']
})
export class PluginInterceptorComponent extends PluginTemplateComponent {

  constructor() {
    super()
  }

  private write: string

  process(command: string, value: string, author: string) {
    if (command != "test") {
      return
    }
    this.write = `Test command : "${value}" [${author}]`
    this.intercept()
  }

}
