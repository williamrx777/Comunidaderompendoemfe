import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultoComponent } from './culto.component';

describe('CultoComponent', () => {
  let component: CultoComponent;
  let fixture: ComponentFixture<CultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
