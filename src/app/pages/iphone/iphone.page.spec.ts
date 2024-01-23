import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IphonePage } from './iphone.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('IphonePage', () => {
  let component: IphonePage;
  let fixture: ComponentFixture<IphonePage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(IphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
