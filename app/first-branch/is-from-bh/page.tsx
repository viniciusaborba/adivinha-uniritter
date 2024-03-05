import { QuestionCard } from "@/components/question-card";

export default function IsFromBHQuestion() {
  return (
    <QuestionCard
      question="Seu clube é de Belo Horizonte?"
      onTrue="/first-branch/is-greatest"
      onFalse="/not-found"
    />
  );
}
