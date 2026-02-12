import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAbilities } from './manage-abilities';

describe('ManageAbilities', () => {
  let component: ManageAbilities;
  let fixture: ComponentFixture<ManageAbilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAbilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAbilities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
