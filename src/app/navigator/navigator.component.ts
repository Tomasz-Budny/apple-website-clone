import { Component } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {

  onClick(event: MouseEvent, el: HTMLElement) {
    el.classList.toggle('collapsed');
    (<HTMLElement>event.currentTarget).classList.toggle('fa-bars');
    (<HTMLElement>event.currentTarget).classList.toggle('fa-xmark');
  }
}
