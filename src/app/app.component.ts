import { Component } from '@angular/core';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';
import { WsCommunicationService } from './ws-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public wsComm: WsCommunicationService) { }

  title = 'ADM-19-04';
  faBiohazard = faBiohazard;

  userName = 'User';
  password = 'Password';

  onConnect() {
    if (this.wsComm.connectionStatus === false) {
      this.wsComm.connect(this.userName, this.password);
    } else {
      this.wsComm.disconnect();
    }
  }
}
