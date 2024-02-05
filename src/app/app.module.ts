import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewCliComponent } from './component-overview-cli/component-overview-cli.component';
import { ParentComponent } from './life-cyle-hooks/components/parent/parent.component';
import { ChildComponent } from './life-cyle-hooks/components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewCliComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
