# Banner

[![GitHub release](https://img.shields.io/github/release/attus74/banner.svg)](https://GitHub.com/attus74/banner/releases/)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

```
import {AttusBannerModule} from '@attus/banner';

@NgModule({
  imports: [
    AttusBannerModule,
  ],
})
export class MyModule { }
```
```
<attus-mat-banner *ngIf="loadError !== null">
  <attus-mat-banner-text>
    {{ loadError }}
  </attus-mat-banner-text>
  <attus-mat-banner-actions>
    <button mat-button (click)="myMethod()" color="primary">
      Try Again
    </button>
  </attus-mat-banner-actions>
</attus-mat-banner>

```