import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesResourcesComponent } from './articles-resources.component';

describe('ArticlesResourcesComponent', () => {
  let component: ArticlesResourcesComponent;
  let fixture: ComponentFixture<ArticlesResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticlesResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
