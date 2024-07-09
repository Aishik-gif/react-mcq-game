import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnswersState {
  answers: { [key: string]: string };
  correctAnswers: { [key: string]: string };
  currentQuestion: number;
  score: number;
}

const initialState: AnswersState = {
  currentQuestion: 0,
  answers: {},
  correctAnswers: {},
  score: 0,
};

interface QuestionPayload {
  questionId: number;
  answer: string;
  correctAnswer: string;
}

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<QuestionPayload>) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
      state.correctAnswers[questionId] = action.payload.correctAnswer;
    },
    nextQuestion: (state) => {
      const currentQuestionId = state.currentQuestion + 1;
      if (
        state.answers[currentQuestionId] ===
          state.correctAnswers[currentQuestionId] &&
        state.answers[currentQuestionId] !== undefined
      ) {
        state.score += 1;
      }
      state.currentQuestion += 1;
    },
    resetAnswers: (state) => {
      state.answers = {};
      state.currentQuestion = 0;
      state.score = 0;
    },
  },
});

export const { setAnswer, nextQuestion, resetAnswers } = questionSlice.actions;
export default questionSlice.reducer;
