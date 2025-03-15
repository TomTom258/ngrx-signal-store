import { QUESTIONS } from "../data/questions";
import { Question } from "../models/question.model";

export interface QuizSlice {
    readonly questions: Question[];
    readonly answers: number[];
}

export const InitialQuizSlice: QuizSlice = {
    questions: QUESTIONS,
    answers: []
}