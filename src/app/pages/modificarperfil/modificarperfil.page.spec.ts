import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarperfilPage } from './modificarperfil.page';
import { IonicModule } from '@ionic/angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
describe('ModificarperfilPage', () => {
  let component: ModificarperfilPage;
  let fixture: ComponentFixture<ModificarperfilPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(ModificarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
