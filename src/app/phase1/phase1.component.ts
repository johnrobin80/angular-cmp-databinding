import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-phase1',
  templateUrl: './phase1.component.html',
  styleUrls: ['./phase1.component.css'],
})
export class Phase1Component implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverType: string;
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverType: string;
    serverName: string;
    serverContent: string;
  }>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      serverType: 'red',
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverType: 'blue',
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
