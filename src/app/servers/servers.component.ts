import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`.displaying{ color: white}`],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  displayParagraph = false;
  secretParagraph = '';
  logCounter = 0
  displaying = this.logCounter
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server Was Created! Name Is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onDisplayDetails() {
    this.displayParagraph = !this.displayParagraph;
    this.secretParagraph = 'this is not vegan';
    this.logCounter = this.logCounter + 1;
  }

  getColor() {
    return this.logCounter >= 5 ? 'blue' : ''

  }
}
