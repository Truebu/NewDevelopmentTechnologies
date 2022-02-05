import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  private places =[
    {
      id: '1',
      tittle: 'Eifel Tower',
      imageURL: 'https://www.viajesdeprimera.com/wp-content/uploads/2018/08/eiffel-tower-3349075_1280-1200x900.jpg'
    },
    {
      id: '2',
      tittle: 'Statute Liberty',
      imageURL: 'https://estatuadelalibertad.info/wp-content/uploads/2019/04/foto-estatua-de-la-libertad.jpg'

    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
