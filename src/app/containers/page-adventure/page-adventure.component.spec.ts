import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdventureComponent } from './page-adventure.component';

describe('PageAdventureComponent', () => {
  let component: PageAdventureComponent;
  let fixture: ComponentFixture<PageAdventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
