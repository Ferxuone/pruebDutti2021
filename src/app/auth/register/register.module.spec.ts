import { TestBed } from '@angular/core/testing';
import { RegisterModule } from './register.module';

describe('RegisterModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(RegisterModule);
    expect(module).toBeTruthy();
  });
});
