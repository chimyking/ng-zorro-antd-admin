import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LRxjsComponent } from './l-rxjs.component';
import { ObserableComponent } from './pages/obserable/obserable.component';

const routes: Routes = [
  {
    path: '',
    component: LRxjsComponent,
    children: [
      {
        path: 'observable',
        component: ObserableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LRxjsRoutingModule {}
