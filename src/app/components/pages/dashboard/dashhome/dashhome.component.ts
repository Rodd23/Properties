import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent implements OnInit {
  data = {
    labels: ['Venda', 'Locação', 'Temporada'],
    datasets: [{
      label: '# of Votes',
      data: [412, 412, 98],
      borderWidth: 1,
      backgroundColor: ['#CB4335', '#1F618D', '#F1C40F'],
    }]
  };


  ngOnInit(): void {
      new Chart("mychart", {
        type: 'pie',
        data: this.data,
      })

      new Chart("mychartBar", {
        type: 'bar',
        data: {
          labels: ['Interessados', 'Visitas', 'Propostas', 'Contrato Assinado'],
          datasets: [{
            label: 'Capturas',
            data: [238, 144, 39, 12],
            backgroundColor: '#9A89FFB3',
          }]
        }
      })

      new Chart("mychartLine", {
        type: 'line',
        data: {
          labels: ['DEZ 2022','JAN', 'FEV', 'MAR 2023'],
          datasets: [
            {
              label: 'Venda',
              data: [900, 1100, 2000, 6200],
              backgroundColor: 'transparent',
              borderColor: '#008080',
              fill: false,
            },
            {
              label: 'Locação',
              data: [100, 600, 450, 900],
              backgroundColor: 'transparent',
              borderColor: '#ff4500',
              fill: false,
            },
          ]
        }
      })
  }
}
