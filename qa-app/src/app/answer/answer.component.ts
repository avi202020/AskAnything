import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

import { AnswerM } from '../model/answerM';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  answers$: AnswerM;
  questionId$: Number;
  questionVal$: Number;
  questionM: QuestionM;

  answerM: AnswerM = new AnswerM();

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.questionId$ = params.id
      }
    )
  }

  ngOnInit() {
    this.data.getAnswers(this.questionId$).subscribe(
      data => this.answers$ = data
    );

    this.data.getQuestionInfo(this.questionId$).subscribe(
      data => this.questionM = data
    );
  }

  createAnswer() {
    this.answerM.question = +this.questionId$;
    this.answerM.userId = 108;

    this.data.createAnswer(this.answerM).subscribe(
      data => {
        console.log('Answer created!')
        this.answerM = new AnswerM()
        this.ngOnInit()
      }
    )
  }

}
