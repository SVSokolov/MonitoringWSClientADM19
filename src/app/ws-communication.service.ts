import { Injectable } from '@angular/core';
import * as io from '../../node_modules/socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WsCommunicationService {
  private host = "http://" + window.location.hostname + ':6543';
  private socket: any;

  private user: string;
  private pass: string;
  
  constructor() {
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
  
  private connected() {
    console.log('Connected');
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
}
