import { Component, computed, inject, input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuizStore } from '../../store/quiz.store';

@Component({
    selector: 'app-progress',
    imports: [SharedModule],
    templateUrl: './progress.component.html',
    styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  private readonly quizStore = inject(QuizStore);

  readonly value = this.quizStore.currentQuestionIndex;
  readonly max = this.quizStore.questionCount;

  readonly ratio = computed(() => this.value() / this.max());

}
