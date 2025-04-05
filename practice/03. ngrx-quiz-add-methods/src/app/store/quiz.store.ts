import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialQuizSlice } from './quiz.slice';
import { computed } from '@angular/core';
import { addAnswer, resetQuiz } from './quiz.updaters';
import { getCorrectCount } from './quiz.helpers';

export const QuizStore = signalStore(
    {providedIn: 'root'},
    withState(initialQuizSlice),
    withComputed((store) => {
        const currentQuestionIndex = computed(() => store.answers().length);
        const isDone = computed(() => store.answers().length === store.questions().length);
        const currentQuestion = computed(() => store.questions()[currentQuestionIndex()]);
        const questionCount = computed(() => store.questions().length);
        const correctCount = computed(() => getCorrectCount(store.questions(), store.answers()))

        return {
            currentQuestionIndex,
            isDone,
            currentQuestion,
            questionCount,
            correctCount
        }
    }),
    withMethods(store => ({
        addAnswer: (index: number) => patchState(store, addAnswer(index)),
        reset: () => patchState(store, resetQuiz()),
    }))
)
