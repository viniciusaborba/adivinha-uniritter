import { QuestionCard } from "@/components/question-card";

export default function IsMascotAnimalQuestion() {
  return (
    <QuestionCard
      question="O mascote do seu clube é um animal?"
      onTrue="/second-branch/is-from-rs"
      onFalse="/second-branch/is-from-mg"
    />
  );
}
