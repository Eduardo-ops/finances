import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  maxValue
  graficoData

  @Input()
  dados

  ngOnInit () {
  
    this.maxValue = 0
    

    this.dados.filter(item => item).forEach(item => {
      this.maxValue =
        item.recMes > this.maxValue ? item.recMes : this.maxValue
      this.maxValue =
        item.despMes > this.maxValue ? item.despMes : this.maxValue
    })

    this.graficoData = this.dados.filter(item => item).map(item => {
      return {
        barra1: (item.recMes / this.maxValue) * 100,
        barra2: (item.despMes / this.maxValue) * 100,
        label: item.label,
        rec: item.recMes,
        des: item.despMes
      }
    })
  }

  /* nullGraph(){
    let barra1 = 0
    let barra2 = 0
    let label = ''
    let rec = 0
    let des = 0
  } */
}
