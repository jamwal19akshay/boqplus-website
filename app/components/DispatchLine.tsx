import { PRICING } from "@/lib/pricing";

export default function DispatchLine() {
  return (
    <div className="dispatch-line">
      <div>NEW TENDERS ENTER THE RECORD DAILY</div>
      <span>●</span>
      <div>BIDIQ READS THE WINNING BAND</div>
      <span>●</span>
      <div>{PRICING.freeBoqPreviews} FREE BOQ PREVIEWS + {PRICING.freeExports} EXPORTS</div>
      <span>●</span>
      <div aria-hidden="true">NEW TENDERS ENTER THE RECORD DAILY</div>
    </div>
  );
}
