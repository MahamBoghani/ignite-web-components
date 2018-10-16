import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {createCustomElement} from '@angular/elements';

import {ButtonComponent} from '../components/button/button.component';
import {ButtonModule} from '../components/button/button.module';

@NgModule({
  imports: [
    ButtonModule,
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class IgniteModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const buttonCE = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('ignite-button', buttonCE);
  }
}
