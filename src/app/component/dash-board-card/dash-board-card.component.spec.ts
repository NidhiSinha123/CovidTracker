import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardCardComponent } from './dash-board-card.component';

describe('DashBoardCardComponent', () => {
  let component: DashBoardCardComponent;
  let fixture: ComponentFixture<DashBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
