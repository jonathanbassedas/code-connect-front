import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosComponent } from './codigos.component';

describe('CodigosComponent', () => {
  let component: CodigosComponent;
  let fixture: ComponentFixture<CodigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
