import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html'
})
export class DefaultHeaderComponent {

  constructor() {

  }

  @Input() sidebarId: string = 'sidebar1';
}
