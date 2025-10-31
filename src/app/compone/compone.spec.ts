import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compone } from './compone';

describe('Compone', () => {
  let component: Compone;
  let fixture: ComponentFixture<Compone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
