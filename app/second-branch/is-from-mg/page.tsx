import { QuestionCard } from "@/components/question-card";

export default function IsFromMGQuestion() {
  return (
    <QuestionCard
      question="O seu clube é de Minas Gerais?"
      onTrue="/not-found"
      onFalse="/second-branch/is-from-sp/not-mg"
    />
  );
}
