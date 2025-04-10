"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const filters = [
  {
    name: "Newest",
    value: "newest",
  },
  {
    name: "Unanswered",
    value: "unanswered",
  },
  {
    name: "Popular",
    value: "popular",
  },
  {
    name: "Recommended",
    value: "recommended",
  },
];
const HomeFilter = () => {
  const SearchParams = useSearchParams();
  const filterParams = SearchParams.get("filter");
  const [active, setActive] = React.useState(filterParams || "");
  const handleTypeClick = (filter: string) => {
    if (filter) {
      setActive(filter);
    } else {
      setActive("");
    }
  };
  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          key={filter.value}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
