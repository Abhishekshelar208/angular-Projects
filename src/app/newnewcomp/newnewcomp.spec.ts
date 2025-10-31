import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newnewcomp } from './newnewcomp';

describe('Newnewcomp', () => {
  let component: Newnewcomp;
  let fixture: ComponentFixture<Newnewcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newnewcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newnewcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
