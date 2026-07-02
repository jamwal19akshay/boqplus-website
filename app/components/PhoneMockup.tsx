export default function PhoneMockup({
  label,
  caption,
}: {
  label: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative aspect-[1320/2868] w-full max-w-[320px] overflow-hidden rounded-[2.5rem] border-2 border-dashed border-amber bg-navy p-3">
        <div className="flex h-full w-full items-center justify-center rounded-[2rem]">
          <p className="px-6 text-center font-mono text-sm text-amber">
            {label}
            <br />
            <span className="text-white/60">
              Adding tomorrow after device testing
            </span>
          </p>
        </div>
      </div>
      {caption && (
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-navy/50">
          {caption}
        </p>
      )}
    </div>
  );
}
