import { Component, OnInit } from '@angular/core';
import { WsCommunicationService } from '../ws-communication.service';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit {

  constructor(private wsComm: WsCommunicationService) { }

  ngOnInit(): void {
  }

}
