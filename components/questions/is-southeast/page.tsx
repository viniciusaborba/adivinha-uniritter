import { QuestionCard } from "@/components/question-card";

interface IsSoutheastQuestionProps {
  yes: string;
  no: string;
}

export default function IsSoutheastQuestionPage({
  no,
  yes,
}: IsSoutheastQuestionProps) {
  return (
    <QuestionCard
      question="Seu clube é da região sudeste?"
      onTrue={yes}
      onFalse={no}
    />
  );
}
