import { QuestionCard } from "@/components/question-card";

export default function IsSouthQuestion() {
  return (
    <QuestionCard
      question="Seu clube é da região sul?"
      onTrue="/not-found"
      onFalse="/first-branch/is-southeast"
    />
  );
}
