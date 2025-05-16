'use client';

// Import only browser-compatible parts of the library
import { GoogleGenerativeAI } from '@google/generative-ai';

export const initializeAI = () => {
  // Initialize without any file system dependencies
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '');
  return genAI;
};

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
