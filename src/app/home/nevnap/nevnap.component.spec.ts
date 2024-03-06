import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevnapComponent } from './nevnap.component';

describe('NevnapComponent', () => {
  let component: NevnapComponent;
  let fixture: ComponentFixture<NevnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NevnapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NevnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
