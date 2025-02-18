import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipAnimationComponent } from './flip-animation.component';

describe('FlipAnimationComponent', () => {
  let component: FlipAnimationComponent;
  let fixture: ComponentFixture<FlipAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlipAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
