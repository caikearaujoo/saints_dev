"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={cn(
          "relative min-h-screen w-full bg-gray-200 text-slate-950",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg, var(--main-gold) 10%, var(--medium-gold) 15%, var(--dark-gold) 20%, var(--light-gray) 25%, var(--main-gold) 30%)",

            "--white-gradient":
              "repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)",

            // Dourado suavizado
            "--light-gold": "#E0C76B",
            "--main-gold": "#D8B863",
            "--medium-gold": "#C8A94D",
            "--dark-gold": "#B2913B",

            "--light-gray": "#b2b0b0",

            "--black": "#000000",
            "--white": "#ffffff",
            "--transparent": "transparent",
          }}
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px]
              [background-image:var(--white-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              opacity-60 blur-[12px] filter will-change-transform
              after:absolute after:inset-0
              after:[background-image:var(--white-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:[background-attachment:fixed]
              after:mix-blend-soft-light
              after:content-[""]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%, black 10%, var(--transparent) 70%)]`
            )}
          ></div>
        </div>

        <div className="relative z-10 text-black">{children}</div>
      </div>
    </main>
  );
};
