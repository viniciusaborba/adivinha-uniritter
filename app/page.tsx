import AccordionItemComponent from "@/components/ui/accordion-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { db } from "@/db";
import Link from "next/link";

export default function Home() {
  const teams = db.map((team) => team);

  return (
    <div>
      <Card className="p-6 text-center">
        <CardTitle>Bem vindo ao Jogo Adivinha!</CardTitle>
        <CardContent className="mt-5 p-0 space-y-4">
          <h1 className="text-bold text-lg">
            Os 6 maiores vencedores da CDB são:
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {teams.map((team) => (
              <AccordionItemComponent
                key={team.id}
                city={team.city}
                lastTitleYear={team.lastTitleYear}
                mascot={team.mascot}
                rankingPosition={team.rankingPosition}
                state={team.state}
                name={team.title}
                zone={team.zone}
                titleAmount={team.titleAmount}
              />
            ))}
          </div>

          <div className="flex justify-around mt-4 pt-4 border-t border-muted-foreground">
            <Button size="lg" asChild>
              <Link href="/first-question">Jogar</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
