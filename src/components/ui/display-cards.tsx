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
  icon = <Bot className="size-4 text-gold" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-gold",
}: DisplayCardProps) {
  return (
    <div className="relative flex h-[5.5rem] flex-col gap-1.5 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_16px_32px_-12px_rgba(0,0,0,0.55)] backdrop-blur-[14px]">
      <div className="flex items-center gap-2.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold/12">
          {icon}
        </span>
        <p className={cn("text-[0.95rem] font-medium", titleClassName)}>{title}</p>
        <span className="ml-auto shrink-0 text-xs text-muted">{date}</span>
      </div>
      <p className="truncate pl-[2.625rem] text-sm leading-snug text-text/75">
        {description}
      </p>
    </div>
  );
}

// Applied to the product: incidents, releases, AI SRE.
// Order matters — this reads top→bottom as the AI-SRE story.
const PRODUCT_CARDS: DisplayCardProps[] = [
  {
    icon: <ShieldAlert className="size-4 text-gold" />,
    title: "Incident opened",
    description: "API latency spike on eu-west.",
    date: "2 min ago",
    titleClassName: "text-[#ff8c69]",
  },
  {
    icon: <Bot className="size-4 text-gold" />,
    title: "AI hypothesis",
    description: "Root cause: DB connection saturation.",
    date: "Now",
  },
  {
    icon: <GitBranch className="size-4 text-gold" />,
    title: "Runbook attached",
    description: "Rollback checkout-worker, drain jobs.",
    date: "Suggested",
    titleClassName: "text-[#8ad5a3]",
  },
];

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

// Stacked-deck cascade. Each card is OPAQUE so the one in front cleanly
// occludes the one behind (no text bleed). z grows with index so the deck
// reads top→bottom while every card's header + description stays visible;
// the front card only ever covers the bottom padding of the card behind it.
// Rear cards are nudged + scaled for depth, so it reads as a deck, not a list.
const LAYERS = [
  { top: "0rem", x: "1.25rem", scale: 0.955, z: 10, opacity: 0.9 },
  { top: "4.5rem", x: "0.625rem", scale: 0.978, z: 20, opacity: 0.96 },
  { top: "9rem", x: "0rem", scale: 1, z: 30, opacity: 1 },
];

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const baseCards = cards || PRODUCT_CARDS;

  return (
    <div className="animate-appear group relative h-[15.5rem] w-full max-w-[24rem] [animation-delay:200ms]">
      {baseCards.map((card, index) => {
        const layer = LAYERS[index] ?? LAYERS[LAYERS.length - 1];
        return (
          <div
            key={index}
            className="absolute inset-x-0 origin-top transition-all duration-500 ease-out group-hover:[--lift:-0.6rem]"
            style={{
              top: layer.top,
              zIndex: layer.z,
              opacity: layer.opacity,
              transform: `translate3d(${layer.x}, calc(var(--lift, 0rem) * ${LAYERS.length - 1 - index}), 0) scale(${layer.scale})`,
            }}
          >
            <DisplayCard {...card} />
          </div>
        );
      })}
    </div>
  );
}
