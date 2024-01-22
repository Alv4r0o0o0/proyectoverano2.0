import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BdregistroService } from 'src/app/services/bdregistro.service';
import { RegistroPage } from '../registro/registro.page';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioInfo: any = {};


  constructor(private alertController: AlertController, private router:Router, private activedRouter: ActivatedRoute, private bd: BdregistroService) {
}

  ngOnInit() {
    const id_usuario = this.router.getCurrentNavigation()?.extras.state?.['idEnviado'];

    if (id_usuario) {
      this.obtenerInformacionUsuario(id_usuario);
    } else {
      this.presentAlert("No se pudo obtener un id de usuario");
      // Manejar la falta de ID de usuario, por ejemplo, redirigir a la página de inicio de sesión
    }
  
  }
  obtenerInformacionUsuario(id_usuario: number) {
    this.bd.ObtenerUsuarioPorId(id_usuario)
      .then(usuario => {
        if (usuario) {
          this.usuarioInfo = usuario;
        } else {
          this.presentAlert("No se encontro un usuario");
          // Manejar el caso en el que no se encuentra el usuario
        }
      })
      .catch(error => {
        // Manejar errores si es necesario
        this.presentAlert("Error al obtener información del usuario: " + JSON.stringify(error));
      });
    }

    irAModificarPerfil() {
      let NavigationExtras: NavigationExtras = {
        state: { 
          idEnviado: this.usuarioInfo.id_usuario
         }

      }
      
      this.router.navigate(['/modificarperfil'], NavigationExtras); 
        
    }

 

    



  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
 

}
