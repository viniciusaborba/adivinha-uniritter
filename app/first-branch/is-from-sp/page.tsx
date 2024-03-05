import { QuestionCard } from "@/components/question-card";

export default function IsFromSPQuestion() {
  return (
    <QuestionCard
      question="Seu clube é de São Paulo?"
      onTrue="/first-branch/is-shield-green"
      onFalse="/not-found"
    />
  );
}
