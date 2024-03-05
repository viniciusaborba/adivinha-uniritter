import { QuestionCard } from "@/components/question-card";

export default function IsFromSPSecondBranchQuestion() {
  return (
    <QuestionCard
      question="Seu clube é de São Paulo?"
      onTrue="/second-branch/is-crowd-crazy"
      onFalse="/not-found"
    />
  );
}
