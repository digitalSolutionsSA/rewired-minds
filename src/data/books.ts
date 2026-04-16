export type Book = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  price: number;
  originalPrice?: number;
  category: string;
  cover: string;
  icon: string;
  featured?: boolean;
  description: string;
};

export const books: Book[] = [
  {
    id: 'mirror-pain-synesthesia',
    title: 'Mirror-Pain Synesthesia',
    subtitle: 'My Understanding and Coping with a Rare Condition',
    author: 'P.D. Groesbeek',
    price: 182,
    originalPrice: 210,
    category: 'Mental Health',
    cover: '/mirror-pain-synesthesia.jpg',
    icon: '🧠',
    featured: true,
    description:
      'A personal and thoughtful exploration of mirror-pain synesthesia, understanding rare perception, and learning how to cope with it.',
  },
  {
    id: 'how-to-quit-meth-for-good',
    title: 'How to Quit Meth for Good',
    subtitle: 'Breaking Free for Good',
    author: 'P.D. Groesbeek',
    price: 175,
    originalPrice: 205,
    category: 'Recovery',
    cover: '/How-to-Quit-Meth-For-Good-original.jpg',
    icon: '🔥',
    description:
      'A raw, practical guide to breaking meth addiction, rebuilding your mind, and creating a life that does not drag you back.',
  },
  {
    id: 'how-to-quit-weed-for-good',
    title: 'How to Quit Weed for Good',
    subtitle: 'The Journey from 20 Joints a Day to Clarity and Drive',
    author: 'P.D. Groesbeek',
    price: 168,
    originalPrice: 198,
    category: 'Recovery',
    cover: '/How-to-quit-weed-for-good.jpg',
    icon: '🌿',
    description:
      'A brutally honest guide to quitting weed, getting your clarity back, and building real momentum again.',
  },
  {
    id: 'rise-again',
    title: 'Rise Again',
    subtitle: 'Building a Life of Purpose Beyond Recovery',
    author: 'P.D. Groesbeek',
    price: 184,
    originalPrice: 220,
    category: 'Recovery',
    cover: '/Rise-Again.jpg',
    icon: '🔥',
    description:
      'A book about rebuilding identity, purpose, and direction after addiction or collapse, so recovery becomes a beginning instead of just damage control.',
  },
  {
    id: 'so-you-relapsed',
    title: 'So You Relapsed?',
    subtitle: 'What Happens Next Matters Most',
    author: 'P.D. Groesbeek',
    price: 171,
    originalPrice: 199,
    category: 'Recovery',
    cover: '/So-You-Relapsed.jpg',
    icon: '🌅',
    description:
      'A direct and compassionate reset for people who slipped, relapsed, or feel like they ruined everything. You did not.',
  },
  {
    id: 'signal',
    title: 'SIGNAL',
    subtitle: 'Clarity Is the New Superpower',
    author: 'P.D. Groesbeek',
    price: 180,
    originalPrice: 210,
    category: 'Mindset',
    cover: '/SIGNAL.jpg',
    icon: '📶',
    description:
      'A sharp mindset book on clarity, focus, perception, and learning to hear the signal instead of drowning in noise.',
  },
  {
    id: 'what-is-the-nature-of-reality',
    title: 'What Is the Nature of Reality?',
    subtitle: 'Exploring the Eternal Now and the Infinite Self',
    author: 'P.D. Groesbeek',
    price: 166,
    originalPrice: 195,
    category: 'Spirituality',
    cover: '/Whats-the-nature-of-reality.jpg',
    icon: '✨',
    description:
      'A philosophical and spiritual exploration of consciousness, time, self, and the deeper nature of reality.',
  },
  {
    id: 'mind-mouth-gratitude-theory',
    title: 'The Mind, the Mouth, and the Gratitude Theory',
    subtitle: 'Programming Your Abundance Mindset',
    author: 'P.D. Groesbeek',
    price: 173,
    originalPrice: 200,
    category: 'Mindset',
    cover: '/mind-mouth-gratitude.png',
    icon: '🌻',
    description:
      'A practical mindset book on gratitude, language, thought patterns, and rewiring yourself toward abundance and intention.',
  },
  {
    id: 'ai-manifestation-mastery',
    title: 'AI Manifestation Mastery',
    subtitle: 'Using ChatGPT to Manifest Your Dreams',
    author: 'P.D. Groesbeek',
    price: 185,
    originalPrice: 225,
    category: 'Mindset',
    cover: '/AI-Manifestation-Mastery-Cover.jpg',
    icon: '🤖',
    description:
      'A modern guide to using AI tools like ChatGPT to clarify goals, structure vision, and build momentum toward the life you actually want.',
  },
  {
    id: 'maybe-you-are-not-lazy',
    title: 'Maybe You Are Not Lazy!',
    subtitle: 'A Different Way to Understand Motivation',
    author: 'P.D. Groesbeek',
    price: 160,
    originalPrice: 190,
    category: 'Productivity',
    cover: '/Maybe-You-Are-Not-Lazy!.png',
    icon: '⚡',
    description:
      'A punchy rethink of procrastination, shame, motivation, and why the problem may not be laziness at all.',
  },
  {
    id: 'adhdo',
    title: 'ADHDO',
    subtitle: 'Mastering Your Focus With ADHD',
    author: 'P.D. Groesbeek',
    price: 178,
    originalPrice: 208,
    category: 'Productivity',
    cover: '/ADHDO.png',
    icon: '🧩',
    description:
      'A practical guide to focus, structure, and managing ADHD energy in a world designed to scatter your brain in ten directions.',
  },
];

export const categories = [
  'All',
  'Recovery',
  'Mindset',
  'Spirituality',
  'Mental Health',
  'Productivity',
];