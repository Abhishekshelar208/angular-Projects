import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcompone } from './newcompone';

describe('Newcompone', () => {
  let component: Newcompone;
  let fixture: ComponentFixture<Newcompone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newcompone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcompone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
