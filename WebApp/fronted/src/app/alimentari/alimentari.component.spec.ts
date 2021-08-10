import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentareComponent } from './alimentari.component';

describe('AlimentareComponent', () => {
  let component: AlimentareComponent;
  let fixture: ComponentFixture<AlimentareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
