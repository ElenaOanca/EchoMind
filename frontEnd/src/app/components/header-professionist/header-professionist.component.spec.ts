import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfessionistComponent } from './header-professionist.component';

describe('HeaderProfessionistComponent', () => {
  let component: HeaderProfessionistComponent;
  let fixture: ComponentFixture<HeaderProfessionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderProfessionistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderProfessionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
