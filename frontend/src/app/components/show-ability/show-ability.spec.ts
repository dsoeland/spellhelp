import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAbility } from './show-ability';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {render} from '@testing-library/angular';
import {of} from 'rxjs';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('ShowAbility', () => {
  let component: ShowAbility;
  let fixture: ComponentFixture<ShowAbility>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [ShowAbility],
  //     providers: [
  //       provideHttpClient(),
  //       provideRouter([])
  //     ]
  //   })
  //   .compileComponents();
  //
  //   fixture = TestBed.createComponent(ShowAbility);
  //   component = fixture.componentInstance;
  //   await fixture.whenStable();
  // });

  it('should create', async () => {
    await render(ShowAbility, {
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
  });
});
