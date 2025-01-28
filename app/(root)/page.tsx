import Link from "next/link";

import { auth, signOut } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: "1",
    title: "How to learn React ?",
    description: "I want to learn React, can anyone help me ?",
    tag: [
      {
        _id: "1",
        name: "react",
      },
      {
        _id: "2",
        name: "javascript",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript ?",
    description: "I want to learn JavaScript, can anyone help me ?",
    tag: [
      {
        _id: "1",
        name: "react",
      },
      {
        _id: "2",
        name: "javascript",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filterQuestions = questions.filter((question) => {
    return question.title.toLowerCase().includes(query?.toLowerCase());
  });

  const session = await auth();
  console.log(session);
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      {/* HomeFilter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filterQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Home;
