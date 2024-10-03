import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-series-question',
  templateUrl: './series-question.component.html',
  styleUrls: ['./series-question.component.css']
})
export class SeriesQuestionComponent {
  @Input() series: any;
  @Output() vote = new EventEmitter<any>();

  onVote(voteValue: any) {
    this.vote.emit(voteValue);
  }
}
