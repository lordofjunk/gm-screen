import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterPanelComponent } from './monster-panel.component';

describe('MonsterPanelComponent', () => {
  let component: MonsterPanelComponent;
  let fixture: ComponentFixture<MonsterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
