import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iphone1Page } from './iphone1.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('Iphone1Page', () => {
  let component: Iphone1Page;
  let fixture: ComponentFixture<Iphone1Page>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(Iphone1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
