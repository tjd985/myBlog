export interface FrontMatter {
  title: string;
  pubDate: Date;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
}
