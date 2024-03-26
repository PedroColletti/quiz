declare type QuizType = {
  title: string;
  icon: string;
  questions: QuestionsType[];
};

declare type QuestionsType = {
  question: string;
  options: string[];
  answer: string;
};
