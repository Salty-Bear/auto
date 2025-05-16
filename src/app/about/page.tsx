import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Heart, Palette, Smile, Brain } from 'lucide-react';

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
        <Image
          src="https://placehold.co/150x150.png"
          alt="Anshika"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 shadow-lg border-4 border-primary"
          data-ai-hint="portrait woman"
        />
        <h1 className="text-4xl font-bold mb-2">About Anshika</h1>
        <p className="text-xl text-muted-foreground">Celebrating a wonderful person, inside and out.</p>
      </section>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
            <Smile className="w-8 h-8 text-primary" /> A Glimpse into Her World
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 divide-y divide-border">
          <InfoItem
            icon={<Award className="w-8 h-8" />}
            title="Achievements"
            description="Anshika is incredibly talented and has achieved so much. From academic excellence to personal milestones, her dedication shines through in everything she does. She constantly strives for growth and inspires those around her."
          />
          <InfoItem
            icon={<Palette className="w-8 h-8" />}
            title="Hobbies & Passions"
            description="With a creative spirit, Anshika enjoys [mention a hobby like painting, dancing, or playing an instrument]. She also loves [mention another hobby like reading, hiking, or cooking], bringing joy and passion to her pursuits."
          />
           <InfoItem
            icon={<Brain className="w-8 h-8" />}
            title="Curiosities & Interests"
            description="Anshika has a curious mind and is always eager to learn. She's interested in [mention an interest like technology, psychology, or history] and enjoys exploring new ideas and perspectives."
          />
          <InfoItem
            icon={<Heart className="w-8 h-8" />}
            title="Things She Loves"
            description="Anshika cherishes [mention something she loves, e.g., spending time with family and friends, a specific type of food or music, animals]. Her warm heart and appreciation for the simple things make her truly special."
          />
          <InfoItem
            icon={<BookOpen className="w-8 h-8" />}
            title="A Lifelong Learner"
            description="Always curious and eager to expand her horizons, Anshika embraces new challenges and learning opportunities with enthusiasm. Her thirst for knowledge is truly admirable."
          />
        </CardContent>
      </Card>
      
      <section className="text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">Simply Amazing!</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Anshika, your kindness, intelligence, and vibrant personality make the world a brighter place.
          This is just a small tribute to the amazing person you are. Happy Birthday!
        </p>
        <div className="mt-6">
          <Image 
            src="https://placehold.co/700x300.png" 
            alt="Joyful moment"
            width={700}
            height={300}
            className="rounded-lg mx-auto shadow-md"
            data-ai-hint="joy celebration"
          />
        </div>
      </section>
    </div>
  );
}
