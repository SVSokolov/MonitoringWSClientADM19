import { Component, OnInit, OnDestroy } from '@angular/core';
import { WsCommunicationService } from '../ws-communication.service';
import { HwUtilization } from '../hw-utilization';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit, OnDestroy {
  public hwUtilization: HwUtilization = new HwUtilization();
  private utilizationSub : Subscription = undefined;

  constructor(public wsComm: WsCommunicationService) {
  }

  ngOnInit(): void {
    this.wsComm.hwUtilizationEmitter.subscribe((data: HwUtilization) => {
      if(data !== undefined){
        this.hwUtilization = data;
      }
    });
  }

  ngOnDestroy() : void {
    if(this.utilizationSub !== undefined) {
      this.utilizationSub.unsubscribe();
    }
  }
}
