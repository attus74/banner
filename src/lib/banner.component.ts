import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'attus-mat-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {

  bannerClass: string = ''
  isMobile: boolean = true
  breakpointSubscription: Subscription

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      this.isMobile = result.matches;
      this.updateBannerClass();
    });
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }

  updateBannerClass(): void {
    let classes: Array<string> = [
      'attus-mat-banner',
      'mat-elevation-z2',
    ];
    if (this.isMobile) {
      classes.push('mobile');
    }
    else {
      classes.push('desktop');
    }
    this.bannerClass = classes.join(' ');
  }

}
