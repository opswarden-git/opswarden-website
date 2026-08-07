"use client";

import Image from "next/image";
import { useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CircleCheck, Rocket, ShieldAlert, UserRound } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Scene = "problem" | "solution";

type Signal = {
  id: "signal" | "incident" | "release" | "owner";
  name: string;
  detail: string;
  meta: string;
  icon?: ComponentType<{ className?: string }>;
  logo?: string;
};

const scenes: Record<
  Scene,
  {
    eyebrow: string;
    title: string;
    body: string;
    status: string;
    signals: readonly Signal[];
  }
> = {
  problem: {
    eyebrow: "The problem",
    title: "Incident context is scattered across too many tools.",
    body: "An alert fires, a deploy fails and responders piece together context across tools. Time is lost reconstructing what happened, who owns the response and whether it is safe to ship.",
    status: "Context is scattered",
    signals: [
      {
        id: "signal",
        name: "Alertmanager",
        detail: "API latency is firing",
        meta: "alert_firing · now",
        logo: "/assets/integrations/alertmanager.svg",
      },
      {
        id: "incident",
        name: "GitHub",
        detail: "Production workflow failed",
        meta: "deploy.yml · 2 min",
        logo: "/assets/integrations/github.svg",
      },
      {
        id: "release",
        name: "GitLab",
        detail: "Pipeline #482 is blocked",
        meta: "main · 3 min",
        logo: "/assets/integrations/gitlab.webp",
      },
      {
        id: "owner",
        name: "Responder",
        detail: "Who owns this incident?",
        meta: "No assignee · 6 min",
        icon: UserRound,
      },
    ],
  },
  solution: {
    eyebrow: "The solution",
    title: "One live workspace turns signals into coordinated action.",
    body: "OpsWarden verifies incoming events, applies team-owned rules and gives responders one shared timeline from first signal to safe resolution.",
    status: "Response coordinated",
    signals: [
      {
        id: "signal",
        name: "Alertmanager",
        detail: "Signal verified and deduplicated",
        meta: "Source preserved",
        logo: "/assets/integrations/alertmanager.svg",
      },
      {
        id: "incident",
        name: "Incident",
        detail: "High-severity incident opened",
        meta: "Timeline live",
        icon: ShieldAlert,
      },
      {
        id: "release",
        name: "Release",
        detail: "Linked release progression blocked",
        meta: "Risk linked",
        icon: Rocket,
      },
      {
        id: "owner",
        name: "Responder",
        detail: "Owner assigned with shared context",
        meta: "Team notified",
        icon: CircleCheck,
      },
    ],
  },
};

const positions = {
  problem: [
    { x: 70, y: 70, rotate: -1.2 },
    { x: 1780, y: 95, rotate: 1.1 },
    { x: 250, y: 635, rotate: 0.8 },
    { x: 1610, y: 620, rotate: -0.9 },
  ],
  solution: [
    { x: 55, y: 620, rotate: 0 },
    { x: 645, y: 620, rotate: 0 },
    { x: 1235, y: 620, rotate: 0 },
    { x: 1825, y: 620, rotate: 0 },
  ],
} as const;

const paths = {
  problem: [
    // Every route starts and ends beneath a real node. The 24-unit cubic
    // corners mirror the geometry used by polished vector animation exports.
    "M335 190 V314 C335 327.255 345.745 338 359 338 H918 C931.255 338 942 348.745 942 362 V420 C942 433.255 952.745 444 966 444 H1045",
    "M2045 215 V300 C2045 313.255 2034.255 324 2021 324 H1482 C1468.745 324 1458 334.745 1458 348 V420 C1458 433.255 1447.255 444 1434 444 H1355",
    "M515 635 V552 C515 538.745 525.745 528 539 528 H908 C921.255 528 932 517.255 932 504 V482 C932 468.745 942.745 458 956 458 H1045",
    "M1875 620 V550 C1875 536.745 1864.255 526 1851 526 H1492 C1478.745 526 1468 515.255 1468 502 V482 C1468 468.745 1457.255 458 1444 458 H1355",
    "M335 190 V236 C335 249.255 345.745 260 359 260 H1776 C1789.255 260 1800 270.745 1800 284 V620",
    "M515 635 V580 C515 566.745 525.745 556 539 556 H2069 C2082.255 556 2093 545.255 2093 532 V215",
  ],
  solution: [
    "M1200 220 V426 C1200 452.51 1178.51 474 1152 474 H329 C302.49 474 281 495.49 281 522 V620",
    "M1200 426 C1200 452.51 1221.49 474 1248 474 H2079 C2105.51 474 2127 495.49 2127 522 V620",
    "M871 474 V620",
    "M1461 474 V620",
  ],
} as const;

const cardWidth = 520;
const cardHeight = 126;

export function OperationalFlow() {
  const [scene, setScene] = useState<Scene>("problem");
  const [manualSelection, setManualSelection] = useState(false);
  const reduceMotion = useReducedMotion();
  const content = scenes[scene];

  useEffect(() => {
    if (manualSelection || reduceMotion) return;
    const timeout = window.setTimeout(
      () =>
        setScene((current) => (current === "problem" ? "solution" : "problem")),
      scene === "problem" ? 4300 : 5200,
    );
    return () => window.clearTimeout(timeout);
  }, [manualSelection, reduceMotion, scene]);

  const selectScene = (nextScene: Scene) => {
    setManualSelection(true);
    setScene(nextScene);
  };

  return (
    <section id="automation" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl px-4 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
            <svg
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full"
              viewBox="-1200 -420 2400 840"
              preserveAspectRatio="none"
            >
              <motion.path
                fill="var(--color-bg)"
                d="M1200,-420 C1200,-420 1200,420 1200,420 C1200,420 -1200,420 -1200,420 C-1200,420 -1200,-420 -1200,-420 C-1200,-420 1200,-420 1200,-420z"
                initial={reduceMotion ? false : { opacity: 0, scaleY: 0.94 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "center" }}
              />
            </svg>

            <div
              role="tablist"
              aria-label="Problem and solution"
              className="bg-bg mx-auto flex w-fit rounded-full border border-white/[0.08] p-1"
            >
              {(["problem", "solution"] as const).map((value) => (
                <button
                  key={value}
                  id={`${value}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={scene === value}
                  aria-controls="problem-solution-panel"
                  onClick={() => selectScene(value)}
                  className={`relative min-w-24 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    scene === value ? "text-bg" : "text-muted hover:text-text"
                  }`}
                >
                  {scene === value ? (
                    <motion.span
                      layoutId="story-tab-highlight"
                      className="bg-text absolute inset-0 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 34,
                      }}
                    />
                  ) : null}
                  <span className="relative z-10">
                    {value === "problem" ? "Problem" : "Solution"}
                  </span>
                </button>
              ))}
            </div>

            <div
              id="problem-solution-panel"
              role="tabpanel"
              aria-labelledby={`${scene}-tab`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`copy-${scene}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-auto mt-10 max-w-4xl text-center"
                >
                  <p
                    className={`font-mono text-xs font-semibold tracking-[0.16em] uppercase ${
                      scene === "problem" ? "text-[#ff705d]" : "text-gold"
                    }`}
                  >
                    {content.eyebrow}
                  </p>
                  <h2 className="text-text mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                    {content.title}
                  </h2>
                  <p className="text-muted mx-auto mt-6 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
                    {content.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className={`signal-scene mt-14 sm:mt-20 ${scene}`}>
                <motion.svg
                  aria-label={`${content.status}: connected operational signals`}
                  className="signal-vector-scene"
                  viewBox="0 0 2400 840"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.g
                      key={`wires-${scene}`}
                      className={`signal-wire-field ${scene}`}
                      variants={{
                        hidden: {
                          opacity: 0,
                          transition: { duration: 0.16, ease: "easeOut" },
                        },
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 0.3,
                            delay: 0.28,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {paths[scene].map((path) => (
                        <path key={path} d={path} />
                      ))}
                    </motion.g>
                  </AnimatePresence>

                  <motion.foreignObject
                    initial={false}
                    animate={{
                      x: scene === "problem" ? 930 : 910,
                      y: scene === "problem" ? 350 : 40,
                    }}
                    width={scene === "problem" ? 540 : 580}
                    height="220"
                    style={{ overflow: "visible" }}
                    transition={{
                      type: "spring",
                      stiffness: 125,
                      damping: 24,
                    }}
                  >
                    <div className={`scene-status ${scene}`}>
                      {scene === "problem" ? (
                        <ShieldAlert aria-hidden="true" className="size-4" />
                      ) : (
                        <CircleCheck aria-hidden="true" className="size-4" />
                      )}
                      <strong>{content.status}</strong>
                    </div>
                  </motion.foreignObject>

                  {content.signals.map(
                    ({ id, name, detail, meta, icon: Icon, logo }, index) => {
                      const position = positions[scene][index];
                      return (
                        <motion.foreignObject
                          key={id}
                          initial={false}
                          animate={{ x: position.x, y: position.y }}
                          width={cardWidth}
                          height={cardHeight}
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "center",
                            rotate: `${position.rotate}deg`,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 115,
                            damping: 22,
                            delay: reduceMotion ? 0 : 0.08,
                          }}
                        >
                          <article className="signal-card">
                            <span
                              className="signal-card-icon"
                              aria-hidden="true"
                            >
                              {logo ? (
                                <Image
                                  src={logo}
                                  alt=""
                                  width={30}
                                  height={30}
                                  className={`size-7 object-contain ${
                                    logo.endsWith("github.svg") ? "invert" : ""
                                  }`}
                                />
                              ) : Icon ? (
                                <Icon className="size-7" />
                              ) : null}
                            </span>
                            <span className="min-w-0">
                              <span className="flex items-center gap-3">
                                <strong className="text-text text-[24px] font-semibold">
                                  {name}
                                </strong>
                                <span className="text-muted font-mono text-[16px]">
                                  {meta}
                                </span>
                              </span>
                              <span className="text-muted mt-1.5 block text-[22px] leading-tight">
                                {detail}
                              </span>
                            </span>
                          </article>
                        </motion.foreignObject>
                      );
                    },
                  )}
                </motion.svg>

                <div className="signal-mobile-scene">
                  <div className={`scene-status ${scene}`}>
                    {scene === "problem" ? (
                      <ShieldAlert aria-hidden="true" className="size-4" />
                    ) : (
                      <CircleCheck aria-hidden="true" className="size-4" />
                    )}
                    <strong>{content.status}</strong>
                  </div>
                  <div className="signal-cards">
                    {content.signals.map(
                      ({ id, name, detail, meta, icon: Icon, logo }) => (
                        <article key={id} className="signal-card">
                          <span className="signal-card-icon" aria-hidden="true">
                            {logo ? (
                              <Image src={logo} alt="" width={22} height={22} />
                            ) : Icon ? (
                              <Icon className="size-5" />
                            ) : null}
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-2">
                              <strong className="text-text text-sm font-semibold">
                                {name}
                              </strong>
                              <span className="text-muted font-mono text-[10px]">
                                {meta}
                              </span>
                            </span>
                            <span className="text-muted mt-1 block text-sm">
                              {detail}
                            </span>
                          </span>
                        </article>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
