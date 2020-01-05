import { Component, OnInit } from '@angular/core';
import { DolarService } from '../services/dolar.service';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  precioDolar: any;
  constructor(private dolarService: DolarService) {

  }

  async ngOnInit() {
    this.precioDolar = await this.dolarService.getDolar();
    this.precioDolar = this.precioDolar['monedas']['Compra']
    console.log(this.precioDolar)

  }




}
