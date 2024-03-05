import { QuestionCard } from "@/components/question-card";

export default function IsShieldGreenQuestion() {
  return (
    <QuestionCard
      question="O seu clube tem a cor verde no escudo?"
      onTrue="/result?team=palmeiras"
      onFalse="/not-found"
    />
  );
}
