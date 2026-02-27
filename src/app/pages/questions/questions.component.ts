import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ApiResponse, QuestionResponse } from '../../models/types';
import { QuestionBoxComponent } from '../../components/question-box/question-box.component';
import { catchError } from 'rxjs';
import * as marked from 'marked';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [QuestionBoxComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent {
  http = inject(HttpClient);
  url = 'https://opentdb.com/api.php?amount=200';
  questionsList = signal<QuestionResponse[]>([]);
  currentQuestion = signal<QuestionResponse | null>(null);
  ngOnInit(): void {
    this.http
      .get<ApiResponse>(this.url)
      .pipe(
        catchError((err) => {
          throw err;
        }),
      )
      .subscribe((questions) => {
        this.questionsList.set(questions.results);
        this.currentQuestion.set(questions.results[Math.floor(Math.random() * 10)]);
      });
  }

  nextQuestion(event: boolean) {
    if (event) this.currentQuestion.set(this.questionsList()[Math.floor(Math.random() * 10)]);
  }
}
