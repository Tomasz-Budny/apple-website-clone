import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  onToggle(event: MouseEvent) {
    if(window.innerWidth <= 734) {
      (<HTMLDivElement>event.currentTarget).classList.toggle('show');
    }
  }
}
