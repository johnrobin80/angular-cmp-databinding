import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-phase2',
  templateUrl: './phase2.component.html',
  styleUrls: ['./phase2.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class Phase2Component implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
