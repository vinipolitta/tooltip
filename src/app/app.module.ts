import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ViewTooltipComponent } from './components/view-tooltip/view-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    ViewTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TooltipDirective
  ]
})
export class AppModule { }
