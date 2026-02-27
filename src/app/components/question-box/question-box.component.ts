import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-question-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-box.component.html',
  styleUrl: './question-box.component.css',
})
export class QuestionBoxComponent {
  question = input.required<string | undefined>();
  answers = input.required<Array<string>>();
  correct = input.required<string | undefined>();
  result = signal<'right' | 'wrong' | 'empty'>('empty');

  output = output<boolean>();

  handleAnswer(choice: string) {
    if (choice === this.correct()) this.result.set('right');
    else this.result.set('wrong');
    setTimeout(() => {
      this.result.set('empty');
      this.output.emit(true);
    }, 2000);
  }
}
