import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativoPaisesComponent } from './comparativo-paises.component';

describe('ComparativoPaisesComponent', () => {
  let component: ComparativoPaisesComponent;
  let fixture: ComponentFixture<ComparativoPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparativoPaisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparativoPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
