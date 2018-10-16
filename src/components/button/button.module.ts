import {ButtonComponent} from './button.component';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [MatButtonModule],
  exports: [ButtonComponent]
})
export class ButtonModule {
  constructor() {
  }

}
