import { QuestionCard } from "@/components/question-card";

export default function IsGreatestQuestion() {
  return (
    <QuestionCard
      question="Seu clube é o maior campeão da CDB?"
      onTrue="/result?team=cruzeiro"
      onFalse="/not-found"
    />
  );
}
