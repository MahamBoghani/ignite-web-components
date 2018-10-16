import { Component, Input } from '@angular/core';

@Component({
  selector: 'ignite-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class ButtonComponent {
  @Input() buttonLabel: string;
}
