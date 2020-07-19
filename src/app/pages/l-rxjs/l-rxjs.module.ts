import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LRxjsComponent } from './l-rxjs.component';
import { LRxjsRoutingModule } from './l-rxjs.routing';

@NgModule({
  imports: [CommonModule, LRxjsRoutingModule],
  declarations: [LRxjsComponent],
})
export class LRxjsModule {}
