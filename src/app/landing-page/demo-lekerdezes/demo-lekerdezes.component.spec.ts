import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLekerdezesComponent } from './demo-lekerdezes.component';

describe('DemoLekerdezesComponent', () => {
  let component: DemoLekerdezesComponent;
  let fixture: ComponentFixture<DemoLekerdezesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLekerdezesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoLekerdezesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
