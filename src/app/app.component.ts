import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularLearning';
  serverElements = [
    { type: 'server1', name: 'TestServer1', content: 'Just a test1' },
  ];

  oddNumbers: Number[] = [];
  evenNumbers: Number[] = [];

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
    //var indexVal: Number;
    this.serverElements[0].name = 'Changed';
    console.log('Clicked......onChangeFirst');
    //indexVal = +indexVal + 1;
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
    console.log('Clicked......onDestroyFirst');
  }

  constructor() {}

  ngOnInit() {}

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
    console.log(firedNumber);
  }
}
