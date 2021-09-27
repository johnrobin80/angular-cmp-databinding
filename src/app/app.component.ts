import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-cmp-databinding';
  serverElements = [
    { type: 'server1', name: 'TestServer1', content: 'Just a test1' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
    console.log('Clicked......onChangeFirst');
  }

  constructor() {}

  ngOnInit() {}
}
