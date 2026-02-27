export interface QuestionResponse {
  type: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ApiResponse {
  response_code: number;
  results: QuestionResponse[];
}
