import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number | undefined

  ngOnInit(): void {
    this.currentYear = ((new Date()).getFullYear())
  }

}
