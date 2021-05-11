import { Component, OnInit } from '@angular/core';
import { Mov } from './mov';
import { Mes } from './mes';

@Component({
  selector: 'app-transitions',
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css']
})
export class TransitionsComponent implements OnInit {

  mvt: Mov = new Mov()
  mvtList: Mov[] = []

  mes: Mes = new Mes()
  mesList: Mes[] = []


  ngOnInit(): void {
    this.loadLocal()
    this.loadMes()
  }

  //ALIMENTA ARRAY MVTLIST
  sav(form) {
    if (this.mvt.tipo === 'receita') {
      this.mvt.receita = this.mvt.valor
    } else {
      this.mvt.despesa = this.mvt.valor
    }
    this.mvtList.push(this.mvt)
    this.setRecMes()
    this.saveLocal()
    this.saveMes()
    this.mvt = new Mov()
  }

  //ALIMENTA ARRAY MESLIST > VALOR TOTAL RECEITA/DESPESA PARA SER CARREGADO NO GRAFICO
  setRecMes() {
    switch (this.mvt.data) {
      case 'jan':
        let jr = 0
        let jd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'jan') {
            jr += this.mvtList[i].receita
            jd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Janeiro'
        this.mes.recMes = jr
        this.mes.despMes = jd
        this.mesList[0] = (this.mes)
        this.mes = new Mes()
        break;

      case 'fev':
        let fr = 0
        let fd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'fev') {
            fr += this.mvtList[i].receita
            fd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Fevereiro'
        this.mes.recMes = fr
        this.mes.despMes = fd
        this.mesList[1] = (this.mes)
        this.mes = new Mes()
        break;

      case 'mar':
        let mr = 0
        let md = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'mar') {
            mr += this.mvtList[i].receita
            md += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Março'
        this.mes.recMes = mr
        this.mes.despMes = md
        this.mesList[2] = (this.mes)
        this.mes = new Mes()
        break;

      case 'abr':
        let ar = 0
        let ad = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'abr') {
            ar += this.mvtList[i].receita
            ad += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Abril'
        this.mes.recMes = ar
        this.mes.despMes = ad
        this.mesList[3] = (this.mes)
        this.mes = new Mes()
        break;

      case 'mai':
        let mmr = 0
        let mmd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'mai') {
            mmr += this.mvtList[i].receita
            mmd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Maio'
        this.mes.recMes = mmr
        this.mes.despMes = mmd
        this.mesList[4] = (this.mes)
        this.mes = new Mes()
        break;

      case 'jun':
        let jjr = 0
        let jjd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'jun') {
            jjr += this.mvtList[i].receita
            jjd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Junho'
        this.mes.recMes = jjr
        this.mes.despMes = jjd
        this.mesList[5] = (this.mes)
        this.mes = new Mes()
        break;

      case 'jul':
        let jrr = 0
        let jdd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'jul') {
            jrr += this.mvtList[i].receita
            jdd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Julho'
        this.mes.recMes = jrr
        this.mes.despMes = jdd
        this.mesList[6] = (this.mes)
        this.mes = new Mes()
        break;

      case 'ago':
        let aar = 0
        let aad = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'ago') {
            aar += this.mvtList[i].receita
            aad += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Agosto'
        this.mes.recMes = aar
        this.mes.despMes = aad
        this.mesList[7] = (this.mes)
        this.mes = new Mes()
        break;

      case 'set':
        let sr = 0
        let sd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'set') {
            sr += this.mvtList[i].receita
            sd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Setembro'
        this.mes.recMes = sr
        this.mes.despMes = sd
        this.mesList[8] = (this.mes)
        this.mes = new Mes()
        break;

      case 'out':
        let or = 0
        let od = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'out') {
            or += this.mvtList[i].receita
            od += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Outubro'
        this.mes.recMes = or
        this.mes.despMes = od
        this.mesList[9] = (this.mes)
        this.mes = new Mes()
        break;

      case 'nov':
        let nr = 0
        let nd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'nov') {
            nr += this.mvtList[i].receita
            nd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Novembro'
        this.mes.recMes = nr
        this.mes.despMes = nd
        this.mesList[10] = (this.mes)
        this.mes = new Mes()
        break;

      case 'dez':
        let dr = 0
        let dd = 0
        for (let i = 0; i < this.mvtList.length; i++) {
          if (this.mvtList[i].data === 'dez') {
            dr += this.mvtList[i].receita
            dd += this.mvtList[i].despesa
          }
        }
        this.mes.label = 'Dezembro'
        this.mes.recMes = dr
        this.mes.despMes = dd
        this.mesList[11] = (this.mes)
        this.mes = new Mes()
        break;
    }
    console.log(this.mesList)
  }

  //RECEITA TOTAL
  rec() {
    let rec = 0
    for (let i = 0; i < this.mvtList.length; i++) {
      rec += this.mvtList[i].receita
    }
    return rec
    console.log(rec)
  }

  //DESPESA TOTAL
  desp() {
    let desp = 0
    for (let i = 0; i < this.mvtList.length; i++) {
      desp += this.mvtList[i].despesa
    }
    return desp
  }

  //SALDO TOTAL
  sald() {
    return this.rec() - this.desp()
  }

  //SALVA NO LOCAL STORAGE
  saveLocal() {
    const data = JSON.stringify(this.mvtList)
    localStorage.setItem('mvtList', data)
  }

  //CARREGA LOCAL STORAGE
  loadLocal() {
    const data = localStorage.getItem('mvtList')
    if (data) {
      this.mvtList = JSON.parse(data)
    } else {
      this.mvtList = []
    }
  }

  //SALVA NO LOCAL STORAGE
  saveMes() {
    const data = JSON.stringify(this.mesList)
    localStorage.setItem('mesList', data)
  }

  //CARREGA LOCAL STORAGE
  loadMes() {
    const data = localStorage.getItem('mesList')
    if (data) {
      this.mesList = JSON.parse(data)
    } else {
      this.mvtList = []
    }
  }
  //RECARREGAR PAGINA
  reload(){
    location.reload()
  }
}
