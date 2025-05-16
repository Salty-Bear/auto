import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gift, Cake, Sparkles as SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-accent/50 rounded-lg shadow-md">
        <Gift className="w-24 h-24 mx-auto text-primary mb-6" />
        <h1 className="text-5xl font-bold mb-4">Happy Birthday, Anshika!</h1>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Welcome to your special gallery, where we celebrate you with the same enthusiasm as Salty Bear has for Pijon! (That's A LOT, in case you're wondering!)
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/about">
            Click Me Before I Get Offended <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <FeatureCard
          icon={<Cake className="w-12 h-12 text-primary" />}
          title="Birthday Roasts"
          description="People pretending to be nice to you just because it's your birthday. Even Salty Bear wrote one, though it's mostly about Pijon."
          link="/wishes"
          linkText="See Who's Faking It"
        />
        
      </section>

      <section className="py-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center">A Token of Love (Almost as Salty as the Bear)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-foreground/90 max-w-3xl mx-auto">
              This website was made with at least 3 hours of work and 17 cups of coffee. Maybe it's not as devoted as Salty Bear is to Pijon, but we tried! Happy Birthday, Anshika! You're one year older and hopefully at least one day wiser.
            </p>
            <div className="mt-8 text-center">

            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="items-center text-center">
        <div className="p-3 bg-primary/10 rounded-full mb-3">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardContent className="mt-auto text-center">
        <Button variant="outline" asChild>
          <Link href={link}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
