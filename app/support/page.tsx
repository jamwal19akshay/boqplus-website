import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqList, { Faq } from "./FaqList";

export const metadata: Metadata = {
  title: "Support — BOQ+",
  description: "BOQ+ FAQ, refund policy, and support contact.",
};

const faqs: Faq[] = [
  {
    q: "How do I upload a BOQ?",
    a: 'Tap the "+" button on the Home screen, then choose a BOQ file from your phone\'s storage or downloads. BOQ+ parses the items, units, and quantities automatically — check the parsed result before you start filling rates.',
  },
  {
    q: "What BOQ file formats are supported?",
    a: "PDF and Excel (.xls/.xlsx) BOQs are supported. PDFs must contain selectable text — a scanned image-only PDF cannot be parsed automatically.",
  },
  {
    q: "My BOQ template isn't supported — what do I do?",
    a: "Email support@boq.co.in with the tender reference number and the file. We review unsupported templates within 48 hours and will let you know once support is added — see the refund policy below if we can't support it in time.",
  },
  {
    q: "How do I use rate suggestions?",
    a: "On the BOQ table screen, annual plan users see an amber chip above the keyboard showing the market average and typical L1 rate for that item. Tap the chip to fill the rate automatically.",
  },
  {
    q: "What is BidIQ Intelligence?",
    a: "BidIQ Intelligence is our market-data toolkit for annual subscribers: upload comparative statements to see market rate cards, track competitor pricing across tenders, and configure front-loading strategies for your bids.",
  },
  {
    q: "How do I download a tender document?",
    a: "Open a tender's detail screen and tap any document link — it opens in the in-app browser and downloads directly into BOQ+, ready to fill.",
  },
  {
    q: "What is the early bird pricing?",
    a: "The first 100 subscribers to the Annual plan lock in ₹7,999/year forever, instead of the regular ₹11,999/year price. The spot counter on the paywall shows how many early-bird spots are left.",
  },
  {
    q: "What happens after 100 subscribers?",
    a: "Once all 100 early-bird spots are taken, the Annual plan price moves to ₹11,999/year for new subscribers. Anyone who subscribed during the early-bird window keeps ₹7,999/year for as long as they remain subscribed.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are billed and managed through the App Store or Google Play. Cancel any time from your device's subscription settings — you'll keep access until the end of the current billing period.",
  },
  {
    q: "How do I get a refund?",
    a: "Refunds for App Store and Play Store purchases are handled by Apple/Google per their standard policies. For BOQ+-specific issues (e.g. an unsupported BOQ template), see the refund policy below.",
  },
  {
    q: "Is my BOQ data secure?",
    a: "Yes. Your BOQ files and rates are stored encrypted in transit and at rest, and are only accessible from your account. See our Privacy Policy at boq.co.in/privacy for details.",
  },
  {
    q: "Which portals are supported?",
    a: "BOQ+ pulls live tenders from all 46 GePNIC portals across India, including JPDCL, CPWD, PWD, and MES.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav solid />
      <main className="bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold uppercase text-navy md:text-5xl">
            BOQ+ Support
          </h1>

          <h2 className="mb-6 mt-12 font-display text-2xl font-bold uppercase text-navy">
            FAQ
          </h2>
          <FaqList faqs={faqs} />

          <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
            Refund Policy
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            If we cannot support your BOQ template within 48 hours of
            reporting, you are eligible for a full refund. Contact
            support@boq.co.in with your tender reference number.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
            Response Time Commitment
          </h2>
          <p className="mt-4 leading-relaxed text-navy/80">
            We respond to all support emails within 24 hours.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
            Contact
          </h2>
          <p className="mt-4">
            <a
              href="mailto:support@boq.co.in"
              className="font-semibold text-navy underline"
            >
              support@boq.co.in
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
