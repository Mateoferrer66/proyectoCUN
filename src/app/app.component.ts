import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'proyectoCUN';
  imagen: string = 'assets/Logo.png'; 
  imagen2: string = 'assets/botonesencabezado.png';  // Ruta de la imagen corregida
  imagen3: string = 'assets/buscarymenu.png';  // Ruta de la imagen corregida
  imagen4: string = 'assets/iconohome.png';  // Ruta de la imagen corregida
  imagen5: string = 'assets/iconocivil1.png';
  imagen6: string = 'assets/iconocivil2.png';
  imagen7: string = 'assets/iconocivil3.png';
  imagen8: string = 'assets/iconocivil4.png';  // Ruta de la imagen corregida 
  imagen9: string = 'assets/iconofacebook.png';  // Ruta de la imagen corregida
  imagen10: string = 'assets/iconotiktok.png';  // Ruta de la imagen corregida
  imagen11: string = 'assets/iconoinsta.png';  // Ruta de la imagen corregida
  imagen12: string = 'assets/iconoyoutube.png';  // Ruta de la imagen corregida
  imagen13: string = 'assets/iconolinkedin.png';  // Ruta de la imagen corregida
  imagen14: string = 'assets/iconowhatsapp.png';  // Ruta de la imagen corregida
  imagen15: string = 'assets/iconotel.png';  // Ruta de la imagen corregida
  imagen16: string = 'assets/iconocorreo.png';  // Ruta de la imagen corregida
  imagen17: string = 'assets/fondochica.png';  // Ruta de la imagen corregida
}