interface Tag {
  _id: string;
  name: string;
}
interface Author {
  image: string;
  _id: string;
  name: string;
}

interface Question {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
