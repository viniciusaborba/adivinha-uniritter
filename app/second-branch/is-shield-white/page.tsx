import { QuestionCard } from "@/components/question-card";

export default function IsShieldWhiteQuestion() {
  return (
    <QuestionCard
      question="Seu clube tem a cor branca no escudo?"
      onTrue="/second-branch/is-mascot-animal"
      onFalse="/not-found"
    />
  );
}
