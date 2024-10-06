<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();
    
=======
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
>>>>>>> eca784c9036df33df9a6e5c084e96fdb0105e25e
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
<<<<<<< HEAD
=======

>>>>>>> eca784c9036df33df9a6e5c084e96fdb0105e25e
});
