import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  // selector: [app-servers]
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = '';
  serverName = 'testServer';
  serverCreated = false;
  showPassword = false;

  servers = ['Test Server', 'Test Server 2'];
  buttonText = 'Show details';
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = ( event.target as HTMLInputElement).value;
  }

  onUpdatePasswordVisibility() {
    // tslint:disable-next-line: max-line-length
  this.showPassword = !this.showPassword;
  // this.clicks.push(this.clicks.length + 1);
  this.clicks.push(new Date());
  }

  getColor() {
    return this.clicks.length >= 5 ? 'blue' : 'white';
  }

}
