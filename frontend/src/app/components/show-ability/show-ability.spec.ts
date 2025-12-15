import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAbility } from './show-ability';

describe('ShowAbility', () => {
  let component: ShowAbility;
  let fixture: ComponentFixture<ShowAbility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAbility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAbility);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
