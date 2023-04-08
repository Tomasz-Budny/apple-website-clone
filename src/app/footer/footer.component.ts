import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  onToggle(event: MouseEvent) {
    console.log(event.currentTarget);
    (<HTMLDivElement>event.currentTarget).classList.toggle('show-2');
  }
}
