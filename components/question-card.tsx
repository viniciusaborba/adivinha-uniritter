import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";

interface QuestionCardProps {
  question: string;
  onTrue: string;
  onFalse: string;
}

export function QuestionCard({ question, onTrue, onFalse }: QuestionCardProps) {
  return (
    <Card className="p-6 text-center">
      <CardTitle>Jogo Adivinha - UniRitter</CardTitle>
      <CardContent className="mt-5 p-0 space-y-4">
        <h2 className="text-zinc-800 text-xl font-medium">{question}</h2>

        <div className="flex justify-around mt-4 pt-4 border-t border-muted-foreground">
          <Button size="lg" asChild>
            <Link href={onTrue}>Sim</Link>
          </Button>
          <Button variant="destructive" size="lg" asChild>
            <Link href={onFalse}>Não</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
