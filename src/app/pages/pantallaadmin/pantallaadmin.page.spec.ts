import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PantallaadminPage } from './pantallaadmin.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('PantallaadminPage', () => {
  let component: PantallaadminPage;
  let fixture: ComponentFixture<PantallaadminPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(PantallaadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
