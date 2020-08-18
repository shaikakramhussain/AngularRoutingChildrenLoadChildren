import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsChildComponent } from './albums-child.component';

describe('AlbumsChildComponent', () => {
  let component: AlbumsChildComponent;
  let fixture: ComponentFixture<AlbumsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
