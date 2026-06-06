"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Bot, GitBranch, ShieldAlert } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Bot className="size-4 text-gold" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-gold",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "glass relative flex h-36 w-[20rem] -skew-y-[8deg] select-none flex-col justify-between rounded-2xl px-4 py-3 shadow-[0_22px_60px_rgba(0,0,0,0.22)] transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[12rem] after:bg-gradient-to-l after:from-bg after:to-transparent after:content-[''] [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-gold/12 p-1.5">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-base text-text/90">{description}</p>
      <p className="text-sm text-muted">{date}</p>
    </div>
  );
}

// Applied to the product: incidents, releases, AI SRE.
const PRODUCT_CARDS: DisplayCardProps[] = [
  {
    icon: <ShieldAlert className="size-4 text-gold" />,
    title: "Incident opened",
    description: "API latency spike detected on eu-west.",
    date: "2 min ago",
    titleClassName: "text-[#ff8c69]",
    className:
      "[grid-area:stack] -translate-x-8 -translate-y-6 rotate-[-6deg] hover:-translate-y-10",
  },
  {
    icon: <Bot className="size-4 text-gold" />,
    title: "AI hypothesis",
    description: "Likely root cause: database connection saturation.",
    date: "Now",
    className:
      "[grid-area:stack] translate-x-3 translate-y-8 rotate-[4deg] hover:-translate-y-1",
  },
  {
    icon: <GitBranch className="size-4 text-gold" />,
    title: "Runbook attached",
    description: "Rollback checkout-worker and drain stuck jobs.",
    date: "Suggested",
    titleClassName: "text-[#8ad5a3]",
    className:
      "[grid-area:stack] translate-x-16 translate-y-20 rotate-[10deg] hover:translate-y-12",
  },
];

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const displayCards = cards || PRODUCT_CARDS;

  return (
    <div className="animate-appear grid place-items-center [grid-template-areas:'stack'] [animation-delay:200ms]">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
