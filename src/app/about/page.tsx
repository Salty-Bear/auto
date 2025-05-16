import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Heart, Palette, Smile, Brain, Coffee, Bird } from 'lucide-react';

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoItem({ icon, title, description }: InfoItemProps) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:bg-accent/30">
      <div className="flex-shrink-0 text-primary mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10">
        {/* <Image
          src=""
          alt="Pijon Anshika"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 shadow-lg border-4 border-primary"
          data-ai-hint="sleepy woman with bird features"
        /> */}
        <h1 className="text-4xl font-bold mb-2">About Pijon (a.k.a. Anshika)</h1>
        <p className="text-xl text-muted-foreground">The laziest and most lovable human according to Salty Bear</p>
      </section>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
            <Bird className="w-8 h-8 text-primary" /> The Pijon Chronicles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 divide-y divide-border">
          <InfoItem
            icon={<Coffee className="w-8 h-8" />}
            title="Professional Napper"
            description="Anshika has elevated laziness to an art form. Salty Bear counts at least 18 naps per day, and still wonders how she manages to get anything done. Some say she works in her sleep - the ultimate multitasker!"
          />
          <InfoItem
            icon={<Palette className="w-8 h-8" />}
            title="Pijon Behaviors"
            description="Just like her nickname suggests, Anshika exhibits peculiar pijon-like qualities: bobbing her head when excited, making cooing noises when happy, and an uncanny ability to find breadcrumbs anywhere. Salty Bear finds this endlessly amusing."
          />
           <InfoItem
            icon={<Brain className="w-8 h-8" />}
            title="Selective Memory"
            description="Somehow remembers every embarrassing thing Salty Bear has ever done, but conveniently 'forgets' when it's her turn to do chores. Her brain works in mysterious ways that science has yet to explain."
          />
          <InfoItem
            icon={<Heart className="w-8 h-8" />}
            title="Salty Bear's Favorite Human"
            description="Despite (or perhaps because of) her pijon ways and legendary laziness, Salty Bear is completely smitten. 'She makes even doing nothing together the best part of my day,' confesses Salty Bear, who has never rolled eyes more lovingly at anyone else."
          />
          <InfoItem
            icon={<Award className="w-8 h-8" />}
            title="World Record Holder"
            description="Holds the unofficial world record for 'Most Times Saying I'll Do It Tomorrow' while snuggled on the couch. Salty Bear has been documenting this phenomenon for scientific purposes and is considering submitting it to Guinness."
          />
        </CardContent>
      </Card>
      
      <section className="text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">A Love Letter from Salty Bear</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto italic">
          "Dear Pijon, you may be the laziest human I've ever met, but watching you nap brings me more joy than
          you'll ever know. Your pijon ways are weird but wonderful. I wouldn't trade a single one
          of your lazy days for anything in the world. You're perfect exactly as you are - even when you're doing nothing at all."
        </p>
        <p className="mt-4 text-lg font-bold text-primary">- With all my love, Salty Bear</p>
        <div className="mt-6">

        </div>
      </section>
    </div>
  );
}
