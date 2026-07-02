export type Stats = {
  tenders: number;
  portals: number;
  organisations: number;
};

const FALLBACK: Stats = { tenders: 77234, portals: 46, organisations: 6246 };

export async function getStats(): Promise<Stats> {
  try {
    const res = await fetch("https://android-api.boq.co.in/v1/public/stats", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    return {
      tenders: Number(data.tenders) || FALLBACK.tenders,
      portals: Number(data.portals) || FALLBACK.portals,
      organisations: Number(data.organisations) || FALLBACK.organisations,
    };
  } catch {
    return FALLBACK;
  }
}
