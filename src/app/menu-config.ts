import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuConfigService {
  menus = [
    {
      title: 'Angular',
      icon: 'dashboard',
      children: [{ title: 'Angular', router: '/angular' }],
    },
    {
      title: 'NgZorroAntd',
      icon: 'dashboard',
      children: [{ title: 'Angular', router: '/antd' }],
    },
    {
      title: 'RXJS',
      icon: 'dashboard',
      children: [
        {
          title: 'Observable',
          children: [{ title: 'Observable', router: '/rxjs/observable' }],
        },
      ],
    },
  ];
  constructor() {}
}
