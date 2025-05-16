import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-6 shadow-inner mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm flex items-center justify-center">
          Made with <Heart className="w-4 h-4 mx-1 text-pink-500 fill-pink-500" /> for Anshika
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          &copy; {new Date().getFullYear()} Happy Birthday!
        </p>
      </div>
    </footer>
  );
}
