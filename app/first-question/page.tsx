import { QuestionCard } from "@/components/question-card";

export default function Home() {
  return (
    <QuestionCard
      question="Seu clube tem o símbolo redondo?"
      onTrue="/first-branch/last-won"
      onFalse="/second-branch/is-shield-white"
    />
  );
}
