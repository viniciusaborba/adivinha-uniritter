"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FindTeamByQuery } from "../utils/find-team-by-query";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Result() {
  const params = useSearchParams();
  const q = params.get("team");

  if (!q) {
    return null;
  }

  const team = FindTeamByQuery(q);

  if (!team) {
    return null;
  }
  return (
    <Card className="text-center p-8">
      <CardTitle>O time que você pensou é o {team.title}</CardTitle>
      <CardContent>
        <Image
          alt={team.slug}
          width={200}
          height={200}
          src={team.url}
          className="mx-auto mt-5"
        />

        <Button asChild className="mt-2">
          <Link href="/">Jogar novamente!</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
