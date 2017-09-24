import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHelloComponent } from './show-hello.component';

describe('ShowHelloComponent', () => {
  let component: ShowHelloComponent;
  let fixture: ComponentFixture<ShowHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
