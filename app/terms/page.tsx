import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { pageMetadata } from "@/lib/seo";
import { FREE_TIER_SUMMARY, PRICING } from "@/lib/pricing";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service — BOQ+",
  description:
    "The terms that govern your use of the BOQ+ app and boq.co.in: plans, credits, payment, acceptable use and governing law.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalShell
      fileNo="T-01"
      title="Terms of Service"
      updated="[RELEASE DATE]"
      intro={
        <p>
          These terms are a binding agreement between you and BOQ+ governing the
          BOQ+ mobile app and boq.co.in. By creating an account or using the
          service you accept them. They are governed by Indian law. A Hindi
          version (हिन्दी) is at the end of this page.
        </p>
      }
    >
      <p className="legal-callout">
        <strong>Three plain statements.</strong> (1) Your rates, priced BOQs and
        quotations are never shared with anyone. (2) You choose, each time,
        whether to share a blank tender BOQ with other bidders on the same
        tender. (3) If we can&apos;t read a file, we&apos;ll ask before keeping
        it.
      </p>

      <h2>01 — What BOQ+ is, and is not</h2>
      <p>
        BOQ+ is a bid-preparation and market-intelligence tool for contractors
        bidding on Indian government tenders. It lets you fill BOQ (Bill of
        Quantities) files on your phone, browse tenders indexed from public
        e-procurement portals, and see analysis built from government-published
        comparative statements.
      </p>
      <ul>
        <li>
          BOQ+ is <strong>not</strong> a government portal and is not affiliated
          with NIC, GePNIC, CPPP, CPWD, MES, or any department. Bids are always
          prepared, signed, and submitted on the official portal by you.
        </li>
        <li>
          BOQ+ provides{" "}
          <strong>information and analysis, not advice or guarantees</strong>.
          Rate suggestions, Below&nbsp;% bands and winning-bid ranges are
          statistical outputs from historical public data. You are
          solely responsible for every rate you submit and every bid decision you
          make.
        </li>
        <li>
          Tender listings are indexed from public portals on a best-effort basis.
          Always verify tender details, corrigenda, EMD requirements, and closing
          times on the official portal before acting.
        </li>
      </ul>

      <h2>02 — Your account</h2>
      <p>
        You must be 18 or older and using BOQ+ for business purposes. Keep your
        credentials secure; you are responsible for activity under your account.
        One account is for one firm&apos;s use — credentials may not be shared
        across firms.
      </p>
      <p>
        <strong>Accepting these terms.</strong> When you first open the app
        (including as a guest), BOQ+ shows a screen asking you to tick &ldquo;I
        agree to the Terms of Use and Privacy Policy&rdquo;. The Continue button
        stays off until you tick it. We record which version you accepted and
        when. If we change these terms materially, the screen is shown again
        with &ldquo;We&apos;ve updated our terms&rdquo;. If you do not agree, do
        not use the app.
      </p>

      <h2>03 — Plans, credits, and payment</h2>
      <ul>
        <li>
          <strong>Free tier:</strong> {FREE_TIER_SUMMARY}. No card required. We may adjust what the free
          tier includes for new users, but will not retroactively remove BOQs you
          have already created.
        </li>
        <li>
          <strong>Annual subscription:</strong> {PRICING.annualIntro} for your
          first year as an introductory price, then{" "}
          {PRICING.annualStandard} per year from the second year onwards. The
          introductory price is available to every new subscriber and is not
          limited to a fixed number of members. The renewal price is shown to you
          before each renewal.
        </li>
        <li>
          <strong>Quarterly subscription:</strong> {PRICING.quarterly} for 3
          months.
        </li>
        <li>
          Subscriptions unlock unlimited BOQs and full BidIQ intelligence, and
          renew automatically until cancelled in your Play Store / App Store
          settings.
        </li>
        <li>
          <strong>Credits:</strong> {PRICING.credits} buys{" "}
          {PRICING.creditBoqs} BOQ credits, each good for one full BOQ + BidIQ
          run. Credits never expire, are consumed when a run is generated, and
          are non-transferable.
        </li>
        <li>
          All prices include applicable taxes unless the store states otherwise.
          Payments are processed by Google Play / Apple; refunds are governed by
          our <a href="/refund">Refund Policy</a>.
        </li>
        <li>
          We may change prices prospectively. An active subscription keeps its
          price until its next renewal, and we will tell you before a price you
          are paying changes.
        </li>
      </ul>

      <h2>04 — Your content</h2>
      <p>
        You retain ownership of BOQs, rates, and documents you upload. You grant
        us a licence to process them to provide the service. When you upload a
        comparative statement, you confirm it is a document published by a
        procuring authority. If you choose to share it, the already-public bid
        data in it (bidder names, amounts, results) is added to our market index
        in a form not linked to your account; if you do not, it is used only for
        your own BidIQ, as described in the <a href="/privacy">Privacy Policy</a>.
        Your own BOQs, rates, and track record are never shown to other users.
        The only thing you can ever choose to share is a blank item list,
        under Section 05.
      </p>

      <h2>05 — Shared blank-BOQ library</h2>
      <p>
        BOQ+ keeps a library of blank tender BOQs so that bidders on the same
        tender do not each have to type the item list again. These are the rules.
      </p>
      <ul>
        <li>
          <strong>Blank item lists only.</strong> A shared document contains
          only the item numbers, descriptions, quantities and units of the
          tender BOQ. It never contains rates, amounts, prices, your name, your
          firm, or anything from your scenarios, quotations or exports. Phone
          numbers, email addresses and web links in item descriptions are
          removed. If a BOQ has any rate or amount filled in from the source
          file, it cannot be shared.
        </li>
        <li>
          <strong>You opt in, every time.</strong> After a BOQ is read, the app
          asks &ldquo;Share this blank tender BOQ with other BOQ+ users on this
          tender?&rdquo; with Share and Don&apos;t share buttons, neither
          pre-selected. Nothing is shared unless you tap Share for that upload.
          Sharing one BOQ does not mean any other BOQ is shared.
        </li>
        <li>
          <strong>Source credited, never who shared.</strong> Other users see
          the tender, the portal it came from and the department, and that it
          was &ldquo;shared by a BOQ+ user&rdquo;. We never show, give or
          confirm who shared it.
        </li>
        <li>
          <strong>Official document comes first.</strong> Always check the
          official government portal for the official tender document.
          Documents downloaded through BOQ+ may contain mistakes. This notice is
          printed on every PDF and Excel export made from a library BOQ. You
          remain solely responsible for what you bid.
        </li>
        <li>
          <strong>Takedown.</strong> If you believe a document in the library
          should not be there, write to{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>. We remove it
          promptly. Removed documents are no longer offered to anyone. BOQs that
          other users already created from it stay with those users, with their
          own rates.
        </li>
      </ul>

      <h2>06 — Saving files we cannot read</h2>
      <ul>
        <li>
          <strong>We ask for each file.</strong> If BOQ+ cannot read a file, the
          app asks &ldquo;We couldn&apos;t read this file yet. Save it so we can
          work on it and notify you when it&apos;s ready?&rdquo; with Yes and No
          buttons, neither pre-selected. If you tap No, the file is not kept.
        </li>
        <li>
          <strong>How long.</strong> A saved file is kept for up to 90 days and
          deleted sooner, as soon as we have handled it (for example, once it can
          be read and a BOQ has been made for you) or you delete it.
        </li>
        <li>
          <strong>Only to improve BOQ+.</strong> We use saved files only to fix
          and improve how BOQ+ reads files. Only the BOQ+ team can see them.
          They are never shared with anyone, and never added to the library.
        </li>
        <li>
          <strong>Delete anytime.</strong> Delete a saved file from Settings in
          the app, or email{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>. It is then
          deleted straight away.
        </li>
      </ul>

      <h2>07 — Opening government portals inside BOQ+</h2>
      <p>
        On a tender, you can open the government e-procurement portal inside the
        app. The portal is operated by the government department concerned, not
        by BOQ+; its own terms apply there. You log in and solve any captcha
        yourself. We do not see or store your portal login or password, we do not
        read what you type, and the browser forgets its cookies when you close
        it. If you download a BOQ file there, the app asks whether you want to
        price it in BOQ+. Only then is the file uploaded to us.
      </p>

      <h2>10 — Acceptable use</h2>
      <ul>
        <li>No scraping, reselling, or bulk-exporting the market index.</li>
        <li>
          No uploading forged or tampered documents, malware, or content you have
          no right to share.
        </li>
        <li>
          No reverse-engineering the app or using it to build a competing
          dataset.
        </li>
        <li>
          No use in violation of tender conditions or law, including any form of
          bid rigging or cartelisation. BOQ+ shows historical public data; how
          you bid remains your independent commercial decision.
        </li>
      </ul>
      <p>We may suspend accounts that breach these rules.</p>

      <h2>11 — Availability and changes</h2>
      <p>
        We aim for high availability but the service is provided &ldquo;as
        is&rdquo; and &ldquo;as available&rdquo;. We may add, change, or withdraw
        features with reasonable notice for material changes. Some features,
        such as rate-book autofill and calculators, work without a connection;
        most others, including opening and saving BOQs, need one.
      </p>

      <h2>12 — Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, BOQ+ is not liable for lost
        tenders, lost profits, EMD forfeitures, or any indirect or consequential
        loss arising from use of the service, including inaccuracies in indexed
        tender data or analysis. Our total aggregate liability for any claim is
        limited to the amount you paid us in the 12 months before the claim.
        Nothing in these terms limits liability that cannot be limited under
        Indian law.
      </p>

      <h2>13 — Termination</h2>
      <p>
        You can stop using BOQ+ and delete your account at any time. We may
        terminate or suspend access for breach of these terms, with notice where
        practicable. Sections 04, 05, 12, and 14 survive termination.
      </p>

      <h2>14 — Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of India. Subject to any
        non-waivable consumer-forum rights you hold under the Consumer Protection
        Act, 2019, courts at Jammu, Jammu &amp; Kashmir shall have exclusive
        jurisdiction. We prefer to resolve issues directly — write to{" "}
        <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a> first.
      </p>

      <h2>15 — Changes to these terms</h2>
      <p>
        We will notify you in the app of material changes before they take
        effect, and ask you to accept the new version before you continue.
      </p>

      <h2>16 — Your data rights and grievances (India)</h2>
      <p>
        Under India&apos;s Digital Personal Data Protection Act, 2023 you may
        ask for access to your personal data, ask us to correct it, ask us to
        erase it, and make a grievance. Write to{" "}
        <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>. We aim to respond within
        15 days, and always within 90 days. Details are in our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2 id="hindi">हिन्दी — सारांश</h2>
      <div lang="hi">
        <p>
          यह हिन्दी सार आपकी सुविधा के लिए है। किसी अंतर की स्थिति में ऊपर का अंग्रेज़ी
          पाठ मान्य होगा।
        </p>
        <p className="legal-callout">
          <strong>तीन सीधी बातें।</strong> (1) आपके रेट, प्राइस किए गए BOQ और कोटेशन किसी
          के साथ कभी शेयर नहीं होते। (2) हर बार आप तय करते हैं कि खाली टेंडर BOQ उसी टेंडर के
          दूसरे बिडर्स के साथ शेयर करना है या नहीं। (3) अगर हम कोई फ़ाइल नहीं पढ़ पाए, तो उसे रखने
          से पहले हम पूछेंगे।
        </p>
        <h3>शर्तें मानना</h3>
        <p>
          ऐप पहली बार खोलने पर (गेस्ट के रूप में भी) एक स्क्रीन आती है। &ldquo;मैं उपयोग की शर्तों
          और गोपनीयता नीति से सहमत हूँ&rdquo; पर टिक करने तक Continue बटन बंद रहता है। हम दर्ज
          करते हैं कि आपने कौन-सा संस्करण कब माना। शर्तें बदलने पर यह स्क्रीन फिर दिखती है।
        </p>
        <h3>साझा खाली-BOQ लाइब्रेरी</h3>
        <ul>
          <li>
            सिर्फ़ खाली आइटम सूची शेयर होती है: आइटम नंबर, विवरण, मात्रा और इकाई। कोई रेट, राशि,
            कीमत, आपका नाम या फ़र्म कभी नहीं। विवरण में फ़ोन नंबर, ईमेल और लिंक हटा दिए जाते हैं।
            जिस BOQ में स्रोत फ़ाइल से कोई रेट या राशि भरी हो, वह शेयर नहीं हो सकता।
          </li>
          <li>
            हर अपलोड पर आप खुद चुनते हैं: Share या Don&apos;t share। कुछ पहले से चुना नहीं होता।
          </li>
          <li>
            स्रोत (टेंडर, पोर्टल, विभाग) बताया जाता है। किसने शेयर किया, यह कभी नहीं बताया जाता।
          </li>
          <li>
            आधिकारिक टेंडर दस्तावेज़ के लिए हमेशा सरकारी पोर्टल देखें। BOQ+ से डाउनलोड किए गए
            दस्तावेज़ों में गलतियाँ हो सकती हैं।
          </li>
          <li>
            हटवाने का अनुरोध: <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>। दस्तावेज़
            तुरंत हटा दिया जाता है।
          </li>
        </ul>
        <h3>न पढ़ी जा सकने वाली फ़ाइलें</h3>
        <p>
          हर फ़ाइल के लिए हम अलग से पूछते हैं। सेव की गई फ़ाइल अधिकतम 90 दिन रखी जाती है, और
          हमारा काम पूरा होते ही या आपके डिलीट करते ही पहले हटा दी जाती है। इसका उपयोग सिर्फ़ BOQ+
          को बेहतर करने के लिए होता है, यह कभी शेयर नहीं होती। आप इसे Settings में या ईमेल से कभी भी
          डिलीट कर सकते हैं।
        </p>
        <h3>ऐप के अंदर सरकारी पोर्टल</h3>
        <p>
          पोर्टल संबंधित सरकारी विभाग चलाता है, BOQ+ नहीं। पोर्टल का लॉगिन और पासवर्ड हम न देखते हैं
          न सेव करते हैं। लॉगिन और कैप्चा आप खुद करते हैं।
        </p>
        <h3>आपके डेटा अधिकार (DPDP अधिनियम, 2023)</h3>
        <p>
          आप अपने व्यक्तिगत डेटा की जानकारी, सुधार और मिटाने का अनुरोध कर सकते हैं, और शिकायत दर्ज
          कर सकते हैं। संपर्क: <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>। हम 15 दिनों के
          भीतर जवाब देने की कोशिश करते हैं, और हमेशा 90 दिनों के भीतर।
        </p>
      </div>
    </LegalShell>
  );
}
