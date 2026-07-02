import FadeUp from "./animations/FadeUp";

const items = [
  "70+ contractors trust BOQ+",
  "46 GePNIC portals",
  "6,246 government organisations",
  "₹0 to start",
];

export default function SocialProofBar() {
  return (
    <section className="bg-paper py-16">
      <FadeUp>
        <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 text-center font-mono text-sm text-navy/80">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              {i > 0 && <span className="text-amber">•</span>}
              {item}
            </span>
          ))}
        </p>
      </FadeUp>
    </section>
  );
}
