import { Question } from "../models/question.model";

export function getCorrectCount(questions: Question[], answers: number[]): number {
    return questions ? questions.filter((question, index) => question.correctIndex === answers[index]).length : 0;
}