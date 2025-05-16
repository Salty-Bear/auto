'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import type { Wish } from '@/lib/types';
import { Gift, Send, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const WISHES_STORAGE_KEY = 'birthdayWishesForAnshila';

export default function WishesPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedWishes = localStorage.getItem(WISHES_STORAGE_KEY);
      if (storedWishes) {
        setWishes(JSON.parse(storedWishes));
      }
    } catch (error) {
      console.error("Failed to load wishes from localStorage", error);
      toast({
        title: "Error",
        description: "Could not load previous wishes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast({
        title: "Empty Message",
        description: "Please write a wish before sending.",
        variant: "destructive",
      });
      return;
    }

    const newWish: Wish = {
      id: new Date().toISOString() + Math.random().toString(36).substring(2,9), // Basic unique ID
      name: name.trim() || 'Anonymous',
      message: message.trim(),
      date: new Date().toISOString(),
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    try {
      localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(updatedWishes));
      toast({
        title: "Wish Sent!",
        description: "Your birthday wish has been added.",
      });
    } catch (error) {
      console.error("Failed to save wish to localStorage", error);
      toast({
        title: "Error",
        description: "Could not save your wish. Please try again.",
        variant: "destructive",
      });
      // Revert state if save fails
      setWishes(wishes);
    }
    
    setName('');
    setMessage('');
  };

  return (
    <div className="space-y-8">
      <div className="text-center p-6 bg-accent/50 rounded-lg shadow">
        <Gift className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-2">Birthday Wishes</h1>
        <p className="text-lg text-foreground/80">Share your love and wishes for Anshila!</p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Send Your Wish</CardTitle>
          <CardDescription>Let Anshila know you're thinking of her on her special day.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name (Optional)</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your Wish</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your birthday message here..."
                rows={4}
                required
                className="bg-background"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Wish <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center mt-12 mb-6">Messages of Love</h2>
        {isLoading ? (
           <p className="text-center text-muted-foreground">Loading wishes...</p>
        ) : wishes.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No wishes yet. Be the first to send one!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish) => (
              <Card key={wish.id} className="shadow-md flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" /> 
                    {wish.name}
                  </CardTitle>
                  <CardDescription>{format(new Date(wish.date), "MMMM d, yyyy 'at' h:mm a")}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/90 whitespace-pre-wrap">{wish.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
