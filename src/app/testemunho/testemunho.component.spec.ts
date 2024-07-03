import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemunhoComponent } from './testemunho.component';

describe('TestemunhoComponent', () => {
  let component: TestemunhoComponent;
  let fixture: ComponentFixture<TestemunhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestemunhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestemunhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
