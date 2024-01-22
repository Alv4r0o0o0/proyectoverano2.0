import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { BdregistroService } from 'src/app/services/bdregistro.service';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage implements OnInit {
  
  usuarioInfo: any = {}; 
  
  constructor(private alertController: AlertController,private router:Router, private activedRouter: ActivatedRoute, private bd: BdregistroService) {}

  ngOnInit() {
    const id_usuario = this.activedRouter.snapshot.paramMap.get('idEnviado');

    if (id_usuario) {
      this.obtenerInformacionUsuario(+id_usuario); // Convertir a número usando '+' si es necesario
    } else {
      this.presentAlert("no se encontro una id")
    }
  }

  obtenerInformacionUsuario(id_usuario: number) {
    this.bd.ObtenerUsuarioPorId(id_usuario)
      .then(usuario => {
        if (usuario) {
          this.usuarioInfo = usuario;
        } else {
          this.presentAlert("no se encontro un usuario")
        }
      })
      .catch(error => {
        this.presentAlert("Error al obtener información del usuario: " + JSON.stringify(error));
      });
  }

  guardarCambios() {
    this.bd.ActualizarUsuario(this.usuarioInfo)
      .then(() => {
        // Puedes realizar alguna acción adicional después de actualizar con éxito, como redirigir a la página de perfil
        this.router.navigate(['/perfil']);
      })
      .catch(error => {
        // Manejar errores si es necesario
        this.presentAlert("Error al guardar cambios: " + JSON.stringify(error));
      });
  }
  
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
  
    this.usuarioInfo.foto = image.dataUrl; 
  
    
  };
  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
