export interface FrontMatter {
  layout: string;
  title: string;
  pubDate: Date;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
}
