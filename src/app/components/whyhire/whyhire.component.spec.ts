import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyhireComponent } from './whyhire.component';

describe('WhyhireComponent', () => {
  let component: WhyhireComponent;
  let fixture: ComponentFixture<WhyhireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyhireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyhireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
