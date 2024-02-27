import {CardStack} from "./CardStack";
import {cn} from "../utils/cn";
import React from "react";

export function CardDeck() {
  return (
      <>
        <div className="flex items-center justify-center w-full p-12 font-medium text-3xl">
          Flip Cards
        </div>
        <div className="pt-16 flex items-center justify-center w-full">
          <CardStack items={CARDS}/>
        </div>
      </>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
                            children,
                            className,
                          }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
      <span
          className={cn(
              "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
              className
          )}
      >
      {children}
    </span>
  );
};


const CARDS = [
  {
    id: 1,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
        <>
          <p>
            These cards are amazing, <Highlight>I want to use them</Highlight> in my
            project. Framer motion is a godsend ngl tbh fam 🙏
          </p>
        </>
    ),
  },
  {
    id: 2,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
        <>
          <p>
            I dont like this Twitter thing,{" "}
            <Highlight>deleting it right away</Highlight> because yolo. Instead, I
            would like to call it <Highlight>X.com</Highlight> so that it can easily
            be confused with adult sites.
          </p>
        </>
    ),
  },
  {
    id: 3,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
        <>
          <p>3.</p>
          <br/>
          <p>
            The first rule of
            <Highlight>Fight Club</Highlight> is that you do not talk about fight
            club. The second rule of
            <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
            club.
          </p>
        </>
    ),
  },
  {
    id: 4,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
        <>
          <p>4.</p>
          <br/>
          <p>
            The first rule of
            <Highlight>Fight Club</Highlight> is that you do not talk about fight
            club. The second rule of
            <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
            club.
          </p>
        </>
    ),
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
        <>
          <p>5.</p>
          <br/>
          <p>
            The first rule of
            <Highlight>Fight Club</Highlight> is that you do not talk about fight
            club. The second rule of
            <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
            club.
          </p>
        </>
    ),
  },
  {
    id: 6,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
        <>
          <p>6.</p>
          <br/>
          <p>
            The first rule of
            <Highlight>Fight Club</Highlight> is that you do not talk about fight
            club. The second rule of
            <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
            club.
          </p>
        </>
    ),
  },
  {
    id: 7,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
        <>
          <p>7.</p>
          <br/>
          <p>
            The first rule of
            <Highlight>Fight Club</Highlight> is that you do not talk about fight
            club. The second rule of
            <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
            club.
          </p>
        </>
    ),
  },
];