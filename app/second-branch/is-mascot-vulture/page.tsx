import { QuestionCard } from "@/components/question-card";

export default function IsMascotVultureQuestion() {
  return (
    <QuestionCard
      question="O mascote do seu clube é um urubu?"
      onTrue="/result?team=flamengo"
      onFalse="/not-found"
    />
  );
}
