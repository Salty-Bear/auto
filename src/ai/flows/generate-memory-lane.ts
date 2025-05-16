// use server'

/**
 * @fileOverview Generates a personalized fictional story or poem as a creative 'memory lane' tribute.
 *
 * - generateMemoryLane - A function that generates the memory lane story.
 * - GenerateMemoryLaneInput - The input type for the generateMemoryLane function.
 * - GenerateMemoryLaneOutput - The return type for the generateMemoryLane function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMemoryLaneInputSchema = z.object({
  theme: z.string().describe('The theme or genre of the story (e.g., fantasy, romance, adventure).'),
  tone: z.string().describe('The tone or style of the story (e.g., humorous, sentimental, epic).'),
  mainCharacterTrait: z.string().describe('A key personality trait of Anshika to highlight in the story.'),
  significantEvent: z.string().describe('A significant event or memory to include in the story.'),
  setting: z.string().describe('The setting or location where the story takes place.'),
  additionalDetails: z
    .string()
    .optional()
    .describe('Any other details or preferences to incorporate into the story.'),
});
export type GenerateMemoryLaneInput = z.infer<typeof GenerateMemoryLaneInputSchema>;

const GenerateMemoryLaneOutputSchema = z.object({
  story: z.string().describe('The generated fictional story or poem.'),
});
export type GenerateMemoryLaneOutput = z.infer<typeof GenerateMemoryLaneOutputSchema>;

export async function generateMemoryLane(input: GenerateMemoryLaneInput): Promise<GenerateMemoryLaneOutput> {
  return generateMemoryLaneFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMemoryLanePrompt',
  input: {schema: GenerateMemoryLaneInputSchema},
  output: {schema: GenerateMemoryLaneOutputSchema},
  prompt: `You are a creative writer specializing in personalized stories and poems.

  Based on the details provided, generate a fictional story or poem that serves as a creative 'memory lane' tribute for a person named Anshika.

  Theme: {{{theme}}}
  Tone: {{{tone}}}
  Main Character (Anshika)'s Trait: {{{mainCharacterTrait}}}
  Significant Event: {{{significantEvent}}}
  Setting: {{{setting}}}
  Additional Details: {{{additionalDetails}}}

  Write a compelling story or poem.
  `,
});

const generateMemoryLaneFlow = ai.defineFlow(
  {
    name: 'generateMemoryLaneFlow',
    inputSchema: GenerateMemoryLaneInputSchema,
    outputSchema: GenerateMemoryLaneOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
