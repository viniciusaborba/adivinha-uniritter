import { QuestionCard } from "@/components/question-card";

export default function IsShieldWhite() {
  return (
    <QuestionCard
      question="O mascote do seu clube é um galo?"
      onTrue="/result?team=atletico"
      onFalse="/result?team=flamengo"
    />
  );
}
