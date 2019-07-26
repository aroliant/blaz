import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSettingsComponent } from './http-settings.component';

describe('HttpSettingsComponent', () => {
  let component: HttpSettingsComponent;
  let fixture: ComponentFixture<HttpSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
