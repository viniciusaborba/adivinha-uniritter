import { QuestionCard } from "@/components/question-card";

export default function IsFromRSQuestion() {
  return (
    <QuestionCard
      question="Seu clube é do Rio Grande do Sul?"
      onTrue="/first-branch/is-rei-copas"
      onFalse="/not-found"
    />
  );
}
