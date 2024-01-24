import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'apirest',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'samsung',
    loadChildren: () => import('./pages/samsung/samsung.module').then( m => m.SamsungPageModule)
  },
  {
    path: 'xiaomi',
    loadChildren: () => import('./pages/xiaomi/xiaomi.module').then( m => m.XiaomiPageModule)
  },
  {
    path: 'iphone',
    loadChildren: () => import('./pages/iphone/iphone.module').then( m => m.IphonePageModule)
  },
  {
    path: 'iphone1/:idProducto',
    loadChildren: () => import('./pages/iphone1/iphone1.module').then( m => m.Iphone1PageModule)
  },
  
  {
    path: 'pantallaadmin',
    loadChildren: () => import('./pages/pantallaadmin/pantallaadmin.module').then( m => m.PantallaadminPageModule)
  },
 
  {
    path: 'listacel',
    loadChildren: () => import('./pages/listacel/listacel.module').then( m => m.ListacelPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cambiocontra',
    loadChildren: () => import('./pages/cambiocontra/cambiocontra.module').then( m => m.CambiocontraPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  }, 
  {
    path: 'agregarcel',
    loadChildren: () => import('./pages/agregarcel/agregarcel.module').then( m => m.AgregarcelPageModule)
  },
  {
    path: 'modificarcel',
    loadChildren: () => import('./pages/modificarcel/modificarcel.module').then( m => m.ModificarcelPageModule)
  },
 
  {
    path: 'apirest',
    loadChildren: () => import('./pages/apirest/apirest.module').then( m => m.ApirestPageModule)
  },

 
  {
    path: 'modificarperfil',
    loadChildren: () => import('./pages/modificarperfil/modificarperfil.module').then( m => m.ModificarperfilPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/pagerror/pagerror.module').then( m => m.PagerrorPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
