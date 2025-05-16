import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aiHint: string;
}

const photos: Photo[] = [
  { id: '1', src: 'https://placehold.co/600x400.png', alt: 'Anshila smiling', caption: 'A beautiful smile that lights up the room.', aiHint: 'woman smiling' },
  { id: '2', src: 'https://placehold.co/400x600.png', alt: 'Anshila on a trip', caption: 'Adventure time!', aiHint: 'travel adventure' },
  { id: '3', src: 'https://placehold.co/600x450.png', alt: 'Anshila with friends', caption: 'Good times with great company.', aiHint: 'friends group' },
  { id: '4', src: 'https://placehold.co/500x500.png', alt: 'Anshila celebrating', caption: 'Cheers to many more celebrations!', aiHint: 'celebration party' },
  { id: '5', src: 'https://placehold.co/600x400.png', alt: 'Anshila enjoying nature', caption: 'Finding peace in nature.', aiHint: 'nature landscape' },
  { id: '6', src: 'https://placehold.co/400x500.png', alt: 'Anshila with a pet', caption: 'Furry friends make life better.', aiHint: 'person pet' },
];

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="text-center p-6 bg-accent/50 rounded-lg shadow">
        <Camera className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-2">Photo Gallery</h1>
        <p className="text-lg text-foreground/80">A collection of cherished memories and beautiful moments.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="aspect-w-4 aspect-h-3"> {/* Maintain aspect ratio */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={photo.aiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-1 font-medium">{photo.alt}</CardTitle>
              <p className="text-sm text-muted-foreground">{photo.caption}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
