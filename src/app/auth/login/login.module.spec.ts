import { TestBed } from '@angular/core/testing';
import { LoginModule } from './login.module';

describe('LoginModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(LoginModule);
    expect(module).toBeTruthy();
  });
});
