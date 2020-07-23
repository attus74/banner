import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { BannerComponent } from './banner.component';
import { BannerTextComponent } from './banner-text/banner-text.component';
import { BannerActionsComponent } from './banner-actions/banner-actions.component';

@NgModule({
  declarations: [BannerComponent, BannerTextComponent, BannerActionsComponent],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    BannerComponent,
    BannerTextComponent,
    BannerActionsComponent,
  ]
})
export class AttusBannerModule { }
