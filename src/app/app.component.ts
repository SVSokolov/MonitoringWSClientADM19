import { Component } from '@angular/core';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADM-19-04';
  faBiohazard = faBiohazard;

  userName = 'User';
  password = 'Password';
  connectionStatus = false;

  onConnect() {
    this.connectionStatus = !this.connectionStatus;
  }
}
