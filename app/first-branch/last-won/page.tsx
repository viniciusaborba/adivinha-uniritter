import { QuestionCard } from "@/components/question-card";

export default function LastWonQuestion() {
  return (
    <QuestionCard
      question="Seu clube foi campeão nos últimos 5 anos?"
      onTrue="/first-branch/is-south"
      onFalse="/first-branch/is-southeast/not-won"
    />
  );
}
