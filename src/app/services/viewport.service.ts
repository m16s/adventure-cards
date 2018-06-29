import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Viewports {
  S = 0,
  M = 480,
  L = 1024,
  XL = 1280,
}

export enum Orientations {
  Horizontal = 'h',
  Vertical = 'v',
}

interface ViewportEvent {
  viewport: Viewports;
  orientation: Orientations;
}

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  private lastViewport: ViewportEvent = this.calculateViewportUpdate();
  private _viewport$ = new BehaviorSubject<ViewportEvent>(this.lastViewport);

  constructor() {
    window.addEventListener('resize', () => this.onResize());
    this.onResize();
  }

  get viewport$(): Observable<ViewportEvent> {
    return this._viewport$.asObservable();
  }

  private onResize() {
    const newVP = this.calculateViewportUpdate();
    const prevVP = this.lastViewport;

    if (prevVP.viewport !== newVP.viewport || prevVP.orientation !== newVP.orientation) {
      this.lastViewport = newVP;
      this._viewport$.next(newVP);
    }
  }

  private calculateViewportUpdate(): ViewportEvent {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const orientation: Orientations = w > h
      ? Orientations.Horizontal
      : Orientations.Vertical;
    let viewport: Viewports;

    if (w >= Viewports.XL) {
      viewport = Viewports.XL;
    } else if (w >= Viewports.L) {
      viewport = Viewports.L;
    } else if (w >= Viewports.M) {
      viewport = Viewports.M;
    } else {
      viewport = Viewports.S;
    }
    
    return {
      viewport,
      orientation,
    };
  }
}
