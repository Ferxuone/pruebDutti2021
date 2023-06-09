import { TestBed } from '@angular/core/testing';
import { PrincipalModule } from './principal.module';

describe('PrincipalModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PrincipalModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(PrincipalModule);
    expect(module).toBeTruthy();
  });
});