import { Component, AfterViewInit, OnInit } from '@angular/core';

interface SeriesResult {
  series: string;
  liked: boolean | null; // null rappresenta una serie ancora non votata
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey-component.component.html',
})
export class SurveyComponent implements OnInit, AfterViewInit {
  seriesList: SeriesResult[] = [];

  ngOnInit() {
    // Inizializza la lista delle serie TV
    this.seriesList = [
      { series: 'Breaking Bad', liked: null },
      { series: 'Game of Thrones', liked: null },
      { series: 'Stranger Things', liked: null },
      { series: 'The Witcher', liked: null },
    ];
    console.log('Lista delle serie TV inizializzata');
  }

  ngAfterViewInit() {
    // Esegui logiche dopo il rendering della vista
    console.log('I componenti figli sono stati renderizzati completamente');
  }

  // Aggiorna l'esito della valutazione per una serie
  onSeriesVote(event: { series: string, liked: boolean }) {
    const seriesIndex = this.seriesList.findIndex(s => s.series === event.series);
    if (seriesIndex !== -1) {
      this.seriesList[seriesIndex].liked = event.liked;
    }
  }

  // Calcola il riepilogo del sondaggio
  get totalLiked() {
    return this.seriesList.filter(s => s.liked === true).length;
  }

  get totalDisliked() {
    return this.seriesList.filter(s => s.liked === false).length;
  }

  get totalUnrated() {
    return this.seriesList.filter(s => s.liked === null).length;
  }
}
