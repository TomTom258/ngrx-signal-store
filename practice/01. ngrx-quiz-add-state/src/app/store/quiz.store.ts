import { signalStore, withState } from '@ngrx/signals';
import { InitialQuizSlice } from './quiz.slice';

export const QuizStore = signalStore(
    {providedIn: 'root'},
    withState(InitialQuizSlice)
)