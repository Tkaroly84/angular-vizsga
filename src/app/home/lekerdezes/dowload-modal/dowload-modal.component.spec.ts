import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadModalComponent } from './dowload-modal.component';

describe('DowloadModalComponent', () => {
  let component: DowloadModalComponent;
  let fixture: ComponentFixture<DowloadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowloadModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DowloadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
