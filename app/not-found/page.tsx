import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function notFound() {
  return (
    <Card className="p-8 text-center">
      <CardTitle className="max-w-md">
        Opps, time não encontrado com as informações providas.
      </CardTitle>

      <CardContent className="p-0 mt-5">
        <Button asChild>
          <Link href="/">Jogar novamente!</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
