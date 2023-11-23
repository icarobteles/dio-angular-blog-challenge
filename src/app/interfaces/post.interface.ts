export interface IPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string[];
  postedAt: Date;
  author: {
    name: string;
    office: string;
  };
  tag: string;
  imageUrl: string;
}
