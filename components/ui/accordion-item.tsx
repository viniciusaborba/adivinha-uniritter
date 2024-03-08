import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import { db } from "@/db";

interface AccordionItemCompProps {
  name: string;
  titleAmount: string;
  city: string;
  state: string;
  zone: string;
  lastTitleYear: string;
  rankingPosition: string;
  mascot: string;
}

export default function AccordionItemComponent({
  city,
  lastTitleYear,
  titleAmount,
  mascot,
  rankingPosition,
  state,
  name,
  zone,
}: AccordionItemCompProps) {
  const teamsName = db.map((team) => team.title);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border border-solid p-1">
        <AccordionTrigger className="">{name}</AccordionTrigger>

        <AccordionContent>
          <div className="text-left">
            <p>Região: {zone}</p>
            <p>Estado: {state}</p>
            <p>Cidade: {city}</p>
            <p>Quantidade de títulos: {titleAmount}</p>
            <p>Posição no ranking: {rankingPosition}</p>
            <p>Mascote: {mascot}</p>
            <p>Ano do último título: {lastTitleYear}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
