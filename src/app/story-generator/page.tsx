'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { generateMemoryLane, type GenerateMemoryLaneInput, type GenerateMemoryLaneOutput } from '@/ai/flows/generate-memory-lane';
import { Loader2, Wand2, Sparkles as SparklesIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const themes = ["Fantasy", "Romance", "Adventure", "Sci-Fi", "Mystery", "Humor"];
const tones = ["Humorous", "Sentimental", "Epic", "Whimsical", "Dramatic", "Lighthearted"];


export default function StoryGeneratorPage() {
  const [formData, setFormData] = useState<GenerateMemoryLaneInput>({
    theme: '',
    tone: '',
    mainCharacterTrait: '',
    significantEvent: '',
    setting: '',
    additionalDetails: '',
  });
  const [story, setStory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: keyof GenerateMemoryLaneInput, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStory(null);

    if (!formData.theme || !formData.tone || !formData.mainCharacterTrait || !formData.significantEvent || !formData.setting) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields to generate a story.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const result: GenerateMemoryLaneOutput = await generateMemoryLane(formData);
      setStory(result.story);
      toast({
        title: "Story Generated!",
        description: "Your unique memory lane story is ready.",
      });
    } catch (error) {
      console.error('Error generating story:', error);
      toast({
        title: "Error Generating Story",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center p-6 bg-accent/50 rounded-lg shadow">
        <Wand2 className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-2">AI Memory Lane Story Generator</h1>
        <p className="text-lg text-foreground/80">Let's craft a unique fictional story or poem for Anshila!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Story Weaver</CardTitle>
            <CardDescription>Fill in the details below to inspire the AI.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="theme">Theme/Genre*</Label>
                 <Select name="theme" onValueChange={(value) => handleSelectChange('theme', value)} value={formData.theme}>
                  <SelectTrigger id="theme" className="w-full bg-background">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map(theme => <SelectItem key={theme} value={theme}>{theme}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tone">Tone/Style*</Label>
                <Select name="tone" onValueChange={(value) => handleSelectChange('tone', value)} value={formData.tone}>
                  <SelectTrigger id="tone" className="w-full bg-background">
                    <SelectValue placeholder="Select a tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {tones.map(tone => <SelectItem key={tone} value={tone}>{tone}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="mainCharacterTrait">Anshila's Key Trait*</Label>
                <Input id="mainCharacterTrait" name="mainCharacterTrait" value={formData.mainCharacterTrait} onChange={handleChange} placeholder="e.g., kindness, bravery, humor" required className="bg-background" />
              </div>
              <div>
                <Label htmlFor="significantEvent">Significant Event/Memory*</Label>
                <Input id="significantEvent" name="significantEvent" value={formData.significantEvent} onChange={handleChange} placeholder="e.g., a memorable trip, an achievement" required className="bg-background" />
              </div>
              <div>
                <Label htmlFor="setting">Story Setting*</Label>
                <Input id="setting" name="setting" value={formData.setting} onChange={handleChange} placeholder="e.g., a magical forest, a futuristic city" required className="bg-background" />
              </div>
              <div>
                <Label htmlFor="additionalDetails">Additional Details (Optional)</Label>
                <Textarea id="additionalDetails" name="additionalDetails" value={formData.additionalDetails || ''} onChange={handleChange} placeholder="Any other elements, characters, or ideas" className="bg-background" />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <SparklesIcon className="mr-2 h-4 w-4" />}
                Generate Story
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className={`shadow-lg min-h-[300px] transition-all duration-500 ${story || isLoading ? 'opacity-100' : 'opacity-50'}`}>
          <CardHeader>
            <CardTitle className="text-2xl">Your Generated Story</CardTitle>
            <CardDescription>Here's the special tale woven by the AI.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
                <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Crafting your story...</p>
              </div>
            )}
            {story && !isLoading && (
              <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none whitespace-pre-wrap p-4 bg-background/50 rounded-md">
                {story}
              </div>
            )}
            {!story && !isLoading && (
              <p className="text-center text-muted-foreground py-10">Your story will appear here once generated.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
