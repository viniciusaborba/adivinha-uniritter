import { QuestionCard } from "@/components/question-card";

export default function IsFromRSWhite() {
  return (
    <QuestionCard
      question="O seu clube é do sul?"
      onTrue="/not-found"
      onFalse="/second-branch/is-southeast"
    />
  );
}
