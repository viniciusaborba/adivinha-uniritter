import { QuestionCard } from "@/components/question-card";

export default function IsFromSPSecondBranchQuestion() {
  return (
    <QuestionCard
      question="A torcida do seu clube é conhecida como bando de loucos?"
      onTrue="/result?team=corinthians"
      onFalse="/not-found"
    />
  );
}
