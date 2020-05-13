import { Injectable } from '@angular/core';
import * as io from '../../node_modules/socket.io-client';

import { Observable, Subject } from 'rxjs';
import { HwUtilization } from './hw-utilization';

@Injectable({
  providedIn: 'root'
})
export class WsCommunicationService {
  private host = "http://" + window.location.hostname + ':6543';
  private socket: any;

  private user: string;
  private pass: string;
  private access: string;

  hwUtilizationEmitter: Subject<HwUtilization>;

  constructor() {
    this.hwUtilizationEmitter = new Subject<HwUtilization>();

    this.socket = io(this.host, { autoConnect: false });
    this.socket.on('connect', () => this.connected());
    this.socket.on('disconnect', () => this.disconnected());
    this.socket.on('error', (error: string) => {
      console.log(`ERROR: "${error}" (${this.host})`);
    });
  }

  get connectionStatus(): boolean {
    return this.socket.connected;
  }
  get userName(): string {
    return this.user;
  }
  get accessLevel(): string {
    return this.access;
  }

  private connected() {
    console.log('Connected');

    this.sendMessage('login', { name: this.user, pass: this.pass }).subscribe(
      (data) => {
        this.access = data.access;
        console.log(`Login successfull: ${data.msg}, accessLevel: ${data.access}`);

        this.socket.on('msg', (msg) => this.onMsg(msg));
      },
      (error) => {
        console.log(`Login error: ${error.msg}`);
      },
      () => {
        console.log('Login complete');
      }
    );
  }

  private disconnected() {
    console.log('Disconnected');
  }

  connect(userName: string, password: string) {
    this.user = userName;
    this.pass = password;

    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(channel, message) {
    console.log(`emit to ${channel}:`, message);

    return new Observable<any>(observer => {
      this.socket.emit(channel, message, (reply: any) => {
        console.log(reply);

        if (reply.success) {
          observer.next(reply);
        } else {
          observer.error(reply);
        }

        observer.complete();
      });
    });
  }

  private onMsg(data) {
    if ((this.hwUtilizationEmitter !== undefined) && (this.hwUtilizationEmitter.closed === false)) {
      this.hwUtilizationEmitter.next(data);
    }
  }
}
