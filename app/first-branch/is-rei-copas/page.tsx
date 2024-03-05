import { QuestionCard } from "@/components/question-card";

export default function IsReiCopasQuestion() {
  return (
    <QuestionCard
      question="Seu clube é conhecido como rei de copas?"
      onTrue="/result?team=gremio"
      onFalse="/not-found"
    />
  );
}
