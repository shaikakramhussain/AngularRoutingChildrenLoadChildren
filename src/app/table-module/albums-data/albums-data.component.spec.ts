import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDataComponent } from './albums-data.component';

describe('AlbumsDataComponent', () => {
  let component: AlbumsDataComponent;
  let fixture: ComponentFixture<AlbumsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
