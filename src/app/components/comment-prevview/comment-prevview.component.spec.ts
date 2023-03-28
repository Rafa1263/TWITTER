import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPrevviewComponent } from './comment-prevview.component';

describe('CommentPrevviewComponent', () => {
  let component: CommentPrevviewComponent;
  let fixture: ComponentFixture<CommentPrevviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentPrevviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentPrevviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
