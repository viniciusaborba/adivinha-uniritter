import { QuestionCard } from "@/components/question-card";

export default function IsFromMGQuestion() {
  return (
    <QuestionCard
      question="Seu clube é de Minas Gerais?"
      onTrue="/first-branch/is-from-bh"
      onFalse="/not-found"
    />
  );
}
