export type Category =
  | 'ALL_SOFTWARE'
  | 'STREAMING'
  | 'RECORDING'
  | 'OPTIMIZATION'
  | 'ANALYTICS'
  | 'OVERLAYS'
  | 'AUDIO';

export type Product = {
  id: number;
  name: string;
  price?: string;
  originalPrice?: string;
  image?: string;
  description: string;
  features?: string[];
  tags?: string[];
  category: Category;
  rating?: number;
  downloads?: string;
  systemReqs?: {
    os?: string;
    cpu?: string;
    ram?: string;
    gpu?: string;
    storage?: string;
    network?: string;
  };
  compatibility?: { game: string; version: string; status: 'ACTIVE' | 'BETA' | 'UNTESTED' }[];
};
