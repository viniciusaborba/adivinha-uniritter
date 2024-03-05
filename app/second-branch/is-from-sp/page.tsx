import { QuestionCard } from "@/components/question-card";

export default function IsFromSPSecondBranchQuestion() {
  return (
    <QuestionCard
      question="Seu clube é de São Paulo?"
      onTrue="/not-found"
      onFalse="/second-branch/is-from-rj"
    />
  );
}
