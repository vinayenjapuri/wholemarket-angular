import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholemarketPanelComponent } from './wholemarket-panel.component';

describe('WholemarketPanelComponent', () => {
  let component: WholemarketPanelComponent;
  let fixture: ComponentFixture<WholemarketPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholemarketPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholemarketPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
