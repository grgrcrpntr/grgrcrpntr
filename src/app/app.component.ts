import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kendoui-test';
  onButtonClick() {
    alert("Hello from KendoUI!")
  }
}
