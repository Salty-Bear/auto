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
        <h1 className="text-5xl font-bold mb-4">Happy Birthday, Anshila!</h1>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Welcome to your special gallery, a place filled with love, memories, and wishes just for you.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/about">
            Discover More About You <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Image alt="" width={48} height={48} className="w-12 h-12 text-primary" src="https://placehold.co/48x48.png" data-ai-hint="photo collection" />}
          title="Photo Gallery"
          description="A journey through cherished moments and beautiful memories we've shared."
          link="/gallery"
          linkText="Explore Gallery"
        />
        <FeatureCard
          icon={<Cake className="w-12 h-12 text-primary" />}
          title="Birthday Wishes"
          description=" heartfelt messages and wishes from loved ones, all in one place."
          link="/wishes"
          linkText="See Wishes"
        />
        <FeatureCard
          icon={<SparklesIcon className="w-12 h-12 text-primary" />}
          title="AI Story Generator"
          description="Let's create a unique story! Answer a few questions and see the magic."
          link="/story-generator"
          linkText="Create a Story"
        />
      </section>

      <section className="py-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center">A Token of Love</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-foreground/90 max-w-3xl mx-auto">
              This little corner of the internet is dedicated to celebrating you, Anshila. It's a small token of appreciation for the wonderful person you are. We hope you enjoy this journey through memories, wishes, and a bit of creative fun. Happy Birthday once again!
            </p>
            <div className="mt-8 text-center">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Celebration" 
                width={600} 
                height={400} 
                className="rounded-lg mx-auto shadow-md"
                data-ai-hint="birthday celebration" 
              />
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
