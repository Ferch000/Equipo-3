import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,IonToolbar,IonTitle,IonContent],
})
export class HomePage implements OnInit{

  edad:number=0;
  resultado:string ='';

  constructor() {}

  calcular() {
    let edadCanina:number = this.edad * 7;

    this.resultado=
     'La edad canina de su mascotaes de '
     edadCanina + ' años';
    }
}
