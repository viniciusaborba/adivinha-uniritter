import { QuestionCard } from "@/components/question-card";

export default function IsFromParanaQuestion() {
  return (
    <QuestionCard
      question="Seu clube é do Paraná?"
      onTrue="/not-found"
      onFalse="/first-branch/is-from-rs"
    />
  );
}
