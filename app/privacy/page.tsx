import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — BOQ+",
  description:
    "How BOQ+ by Verkzo (operated by Akshay Pratap Singh Jamwal) collects, uses, shares and protects your data under India's DPDP Act, 2023.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell
      fileNo="P-01"
      title="Privacy Policy"
      updated="[RELEASE DATE]"
      intro={
        <p>
          This policy explains, in plain language, what the BOQ+ app (Android
          and iOS) and boq.co.in collect, why, who we share it with, and your
          rights under India&apos;s Digital Personal Data Protection Act, 2023
          (&ldquo;DPDP Act&rdquo;). A Hindi summary (हिन्दी) is at the end of
          this page.
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

      <h2>01 — Who we are</h2>
      <p>
        BOQ+ by Verkzo, operated by Akshay Pratap Singh Jamwal (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;).
        For the DPDP Act, we are the <strong>Data Fiduciary</strong> for the
        personal data described here and you are the{" "}
        <strong>Data Principal</strong>. For anything in this policy, including
        grievances, write to{" "}
        <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>.
      </p>

      <h2>02 — What we collect, and why</h2>
      <div className="legal-table-scroll">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Where it comes from</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Account details — email address, name (if your Apple or Google
                account shares it), sign-in identifier, or a guest ID if you
                don&apos;t sign in
              </td>
              <td>You, at sign-in; the app, for guests</td>
              <td>
                Creating and securing your account, restoring purchases, support
              </td>
            </tr>
            <tr>
              <td>
                Firm profile — your state, city (if you add it), and the
                departments and work types you follow
              </td>
              <td>You, in the app</td>
              <td>Showing relevant tenders and alerts, and sensible defaults</td>
            </tr>
            <tr>
              <td>Firm name (optional)</td>
              <td>You, in the app</td>
              <td>
                Printing it on BOQs you export. If you add it, we also look for
                your firm&apos;s bids in public tender results to build your
                private track record (win rate, margin vs L1). Only you see this.
                Remove the firm name to stop it.
              </td>
            </tr>
            <tr>
              <td>BOQ files and comparative statements you upload</td>
              <td>You</td>
              <td>
                We read the file to extract its items, then{" "}
                <strong>delete the file right after reading</strong>. We keep the
                extracted items, the file name and a fingerprint (a code computed
                from the file) so you can keep working on it. If the same file is
                uploaded again, by you or anyone else, we reuse the items already
                extracted instead of reading it again; we never keep the file
                itself for this. If a file fails to read, the app asks whether to
                save it (see the next rows).
              </td>
            </tr>
            <tr>
              <td>
                Files we couldn&apos;t read, <strong>only if you say Yes</strong>{" "}
                for that file — the file itself, its type and size
              </td>
              <td>You, per file, when you tap &ldquo;Yes, save it&rdquo;</td>
              <td>
                Fixing and improving how BOQ+ reads files, and telling you when
                your file can be read. Kept up to 90 days, and deleted sooner once
                handled or when you delete it. Only the BOQ+ team can see it. It
                is never shared. If you tap No, nothing is kept.
              </td>
            </tr>
            <tr>
              <td>
                A blank BOQ item list, <strong>only if you tap Share</strong> for
                that upload — item numbers, descriptions, quantities and units
              </td>
              <td>You, per upload</td>
              <td>
                Adding it to the shared blank-BOQ library (see below) so other
                bidders on the same tender can price it. No rates, amounts,
                names or contact details are included.
              </td>
            </tr>
            <tr>
              <td>
                Which Terms and Privacy Policy version you accepted, and when
              </td>
              <td>You, at the sign-up screen</td>
              <td>
                Keeping a record that you accepted, and asking again when the
                terms change
              </td>
            </tr>
            <tr>
              <td>Rates you enter, scenarios, exports, and feedback you send</td>
              <td>You</td>
              <td>Providing the service and answering you</td>
            </tr>
            <tr>
              <td>
                Purchase data — plan, product, purchase and expiry dates, store
                transaction ID
              </td>
              <td>Apple App Store / Google Play</td>
              <td>
                Activating your plan or credits, refunds and disputes. We never
                see card or bank details.
              </td>
            </tr>
            <tr>
              <td>
                Quotations and estimates you make in the app — your business
                profile, logo, signature, clients, lines and amounts
              </td>
              <td>You, in the app</td>
              <td>
                Making the PDF. These stay on your phone; we don&apos;t receive
                them. Our server only records that a document was made (its type
                and an ID, not its contents), to count the free documents.
              </td>
            </tr>
            <tr>
              <td>
                App usage events — e.g. app opened, BOQ uploaded, report viewed,
                plans screen viewed, purchase made
              </td>
              <td>The app, automatically</td>
              <td>Understanding what works and fixing what doesn&apos;t</td>
            </tr>
            <tr>
              <td>
                Device identifiers — an install ID, a push-notification token,
                and — only if you allow ad measurement — your device&apos;s
                advertising identifier
              </td>
              <td>The app</td>
              <td>
                Sending notifications, analytics, and (with your permission) ad
                measurement
              </td>
            </tr>
            <tr>
              <td>
                Device checks — on iPhone, an Apple DeviceCheck token; on
                Android, the Android ID and a Google Play Integrity check
              </td>
              <td>The app, when you upload or export a BOQ</td>
              <td>Preventing abuse of the free tier</td>
            </tr>
            <tr>
              <td>Text you type into tender, city or price search</td>
              <td>You, in the app</td>
              <td>Showing matching tenders, cities and prices</td>
            </tr>
            <tr>
              <td>
                Crash reports — device model, OS and app version, and technical
                error details. No screenshots and no BOQ content.
              </td>
              <td>The app, when it crashes</td>
              <td>Fixing bugs</td>
            </tr>
            <tr>
              <td>
                How you found BOQ+ — on iPhone, Apple&apos;s ad attribution
                token; on Android, the Google Play install referrer
              </td>
              <td>The app, on first launch</td>
              <td>Knowing which campaign or link led to the install</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="legal-callout">
        We do not collect your contacts, SMS, call logs, photos or precise
        location. We never sell your data. We never send your BOQs, rates, firm
        name or email to advertising companies.
      </p>

      <h3>Shared blank-BOQ library</h3>
      <p>
        When a tender BOQ is read, the app may ask whether to share it, blank,
        with other BOQ+ users on the same tender. You are asked for each upload;
        Share and Don&apos;t share are equally prominent and nothing is
        pre-selected. If you tap Share, we store only the item list (item
        numbers, descriptions, quantities, units) with the tender, portal and
        department. We do not store or show your rates, prices, name, email,
        firm or anything from your scenarios, quotations or exports. Phone
        numbers, email addresses and links in item descriptions are removed, and
        a BOQ that has any rate or amount from the source file is refused. Other
        users see the source (tender, portal, department) and &ldquo;shared by a
        BOQ+ user&rdquo;, never who. Internally we keep a link to the sharing
        account only so we can handle takedown requests; it is never shown to
        any user. Always check the official government portal for the official
        tender document; documents downloaded through BOQ+ may contain mistakes.
        To have a document removed, write to{" "}
        <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>; we remove it
        promptly.
      </p>

      <h3>Opening a government portal inside BOQ+</h3>
      <p>
        The in-app portal browser shows the official portal, which is operated
        by the government department concerned. You log in and solve any captcha
        yourself. We do not see or store your portal login or password, we do not
        read what you type, and cookies are cleared when you close the browser.
        A file you download there is uploaded to BOQ+ only if you tap &ldquo;Price
        this BOQ in BOQ+&rdquo;.
      </p>

      <h3>A note on comparative statements</h3>
      <p>
        Comparative statements are documents published by government departments
        after a tender opens. They contain firm names and bid amounts of the
        bidders — information the department has already made public through the
        procurement process. Each time you upload one, the app asks whether to
        share it. Only if you choose &ldquo;Yes, use this chart to improve rates
        for everyone&rdquo; do we add those already-published figures to our
        market index, which every user (including you) sees as rate bands and
        competition data. If you choose &ldquo;No, use it only for my
        BidIQ&rdquo;, the figures are used only for your own BidIQ and track
        record and are not shared with other users. Other users can see the
        market data, never <em>who uploaded it</em>. Your BOQ files, the rates
        you enter, and your track record are never added to the market index or
        shown to other users.
      </p>

      <h2>03 — Ad measurement</h2>
      <p>
        We advertise BOQ+ on Meta (Facebook and Instagram) and may advertise on
        Apple and Google. To know which ads bring people to BOQ+, and{" "}
        <strong>only if you allow it</strong>, the app sends Meta and Google a few
        events —
        install/app open, BOQ uploaded, plans screen viewed, and purchases (with
        the amount) — together with your device&apos;s advertising identifier.
      </p>
      <ul>
        <li>
          <strong>iPhone:</strong> you choose in Apple&apos;s &ldquo;Allow
          tracking&rdquo; prompt, and can change it any time in iOS Settings →
          Privacy &amp; Security → Tracking.
        </li>
        <li>
          <strong>Android:</strong> you choose in our &ldquo;Allow ad
          measurement&rdquo; prompt, which stays off until you answer, and can
          change it any time in BOQ+ Settings.
        </li>
      </ul>
      <p>
        No advertising ID is sent to Meta unless you allow tracking. If you
        don&apos;t allow it, the iPhone app may still tell Meta that a BOQ was
        exported or an account was created, without your advertising ID or any
        BOQ details; from version 3.0.1 nothing is sent to Meta unless you
        allow tracking. Android sends nothing to Meta unless you allow ad
        measurement. If you say no, Google gets no advertising ID or ad
        measurement data either, and BOQ+ works exactly the same. Separately,
        Apple&apos;s ad attribution (iPhone) and
        the Google Play install referrer (Android) tell us which campaign led to
        an install. They don&apos;t follow you across other apps.
      </p>

      <h2>04 — Consent and legal basis</h2>
      <p>
        We process your personal data on the consent you give when you start
        using BOQ+ and accept this policy, for the purposes above and no others.
        Ad measurement has its own separate permission (Section 03). Where the
        DPDP Act allows processing for legitimate uses (Section 7), such as data
        you provide voluntarily for a specific purpose or compliance with law, we
        rely on that. You can withdraw consent any time by switching off ad
        measurement or deleting your account (Section 07); withdrawal
        doesn&apos;t affect processing already done, and some records (e.g.
        purchase records) may be kept where law requires.
      </p>

      <h2>05 — Who we share data with</h2>
      <p>
        These companies process data for us, only for the purposes listed:
      </p>
      <ul>
        <li>
          <strong>Meta Platforms</strong> (Facebook SDK) — app events (and
          your advertising identifier <strong>only with your
          permission</strong>) — ad measurement.
        </li>
        <li>
          <strong>OneSignal</strong> — your BOQ+ user ID, push token and plan
          type — sending tender alerts and deadline reminders.
        </li>
        <li>
          <strong>Sentry</strong> — crash reports — fixing crashes.
        </li>
        <li>
          <strong>Google</strong> — Firebase / Google Analytics (usage
          analytics; your advertising identifier and ad measurement only with
          your permission), Google Sign-In, Google Play billing and install
          referrer.
        </li>
        <li>
          <strong>Apple</strong> — Sign in with Apple, App Store purchases, ad
          attribution.
        </li>
        <li>
          <strong>Anthropic</strong> — when our parser can&apos;t read a BOQ
          layout on its own, the column headers and a few sample rows are sent to
          Anthropic&apos;s AI model to identify the columns; the layout it finds
          is saved so the same layout is read without AI next time. Scanned
          PDFs (photos of pages) may be sent in full, up to 30 pages, so the
          model can read them. When you import an estimate into &ldquo;Make a
          quotation&rdquo;, a photo or scanned PDF of it (up to 10 pages) is sent
          to Anthropic&apos;s AI model so the lines can be read; it is read in
          memory and not stored by us. Anthropic does not use this data to train
          its models.
        </li>
        <li>
          <strong>Railway</strong> (servers and database) and{" "}
          <strong>Cloudflare</strong> (storage for PDF reports you generate).
        </li>
        <li>
          <strong>Authorities</strong> — where Indian law, a court order or a
          lawful government request requires it.
        </li>
      </ul>
      <p>
        Some of these companies process data outside India, under contract, as
        the DPDP Act permits. We never share your BOQs, rates or track record
        with other users or with anyone for their own use. The only thing other
        users can ever see from you is a blank item list that you chose to
        share, without your name.
      </p>

      <h2>06 — Storage, security and retention</h2>
      <p>
        Data is encrypted in transit, and encrypted at rest on our servers, with
        access controls and logging. We maintain reasonable security safeguards as Section 8 of the
        DPDP Act requires, and will notify the Data Protection Board of India and
        affected users of a personal data breach as the Act and its rules
        require.
      </p>
      <p>
        Uploaded BOQ files, comparative statements and estimates imported into
        a quotation are deleted right after they are read; a file you chose to save after a failed read is
        kept up to 90 days and deleted sooner once handled, when you delete it
        (Settings or email), or straight away if you delete your account. Crash reports are kept for up to 90 days. We keep the rest
        while your account is active. After account deletion, personal data is
        erased or anonymised within 90 days, except records we must keep under
        law (e.g. tax and purchase records). Market-index data from
        government-published comparative statements you chose to share is kept
        in de-identified form and is not linked to your account.
      </p>

      <h2>07 — Your rights under the DPDP Act</h2>
      <ul>
        <li>
          <strong>Access:</strong> ask for a summary of the personal data we hold
          about you and how it is processed.
        </li>
        <li>
          <strong>Correction and erasure:</strong> correct inaccurate data or ask
          us to delete it. You can edit your firm profile in-app, delete any
          uploaded BOQ yourself, and delete saved files in Settings. To remove a
          blank BOQ you shared, email us.
        </li>
        <li>
          <strong>Account deletion:</strong> delete your account from the
          app&apos;s settings or by emailing us; this removes your BOQs, rates,
          preferences, and profile as described in Section 06.
        </li>
        <li>
          <strong>Ad measurement:</strong> switch it off any time — see Section
          03.
        </li>
        <li>
          <strong>Grievance redressal:</strong> write to{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>; we respond
          within 90 days. If you are not satisfied, you may complain to
          the <strong>Data Protection Board of India</strong>.
        </li>
        <li>
          <strong>Nomination:</strong> you may nominate a person to exercise
          these rights on your behalf in case of death or incapacity.
        </li>
      </ul>

      <h2>08 — Children</h2>
      <p>
        BOQ+ is a business tool for contractors and is not directed at children.
        We do not knowingly process the data of anyone under 18.
      </p>

      <h2>09 — Changes to this policy</h2>
      <p>
        If we materially change this policy, we will notify you in the app before
        the change takes effect and update the date above. Continued use after
        notice means acceptance; if you disagree, you can delete your account.
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
        <h3>साझा खाली-BOQ लाइब्रेरी</h3>
        <p>
          सिर्फ़ तब जब आप उस अपलोड के लिए Share दबाएँ, हम केवल खाली आइटम सूची रखते हैं: आइटम
          नंबर, विवरण, मात्रा और इकाई, साथ में टेंडर, पोर्टल और विभाग। आपके रेट, कीमतें, नाम, ईमेल या
          फ़र्म कभी नहीं। दूसरे यूज़र्स को स्रोत और &ldquo;BOQ+ यूज़र द्वारा शेयर किया&rdquo; दिखता है,
          किसने शेयर किया यह कभी नहीं। आधिकारिक टेंडर दस्तावेज़ के लिए हमेशा सरकारी पोर्टल देखें।
          BOQ+ से डाउनलोड किए गए दस्तावेज़ों में गलतियाँ हो सकती हैं। हटवाने के लिए{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a> पर लिखें; हम तुरंत हटा देते हैं।
        </p>
        <h3>न पढ़ी जा सकने वाली फ़ाइलें</h3>
        <p>
          हर फ़ाइल के लिए हम अलग से पूछते हैं। &ldquo;हाँ&rdquo; कहने पर फ़ाइल अधिकतम 90 दिन रखी
          जाती है, और काम पूरा होते ही या आपके डिलीट करते ही पहले हटा दी जाती है। इसका उपयोग सिर्फ़
          BOQ+ को बेहतर करने के लिए होता है और यह कभी शेयर नहीं होती। आप इसे Settings में या ईमेल से
          कभी भी डिलीट कर सकते हैं। &ldquo;नहीं&rdquo; कहने पर कुछ नहीं रखा जाता।
        </p>
        <h3>शर्तें मानना</h3>
        <p>
          साइन-अप पर आप उपयोग की शर्तों और गोपनीयता नीति पर टिक करते हैं। हम केवल यह दर्ज करते हैं कि
          आपने कौन-सा संस्करण कब माना।
        </p>
        <h3>ऐप के अंदर सरकारी पोर्टल</h3>
        <p>
          पोर्टल संबंधित सरकारी विभाग चलाता है। पोर्टल का लॉगिन और पासवर्ड हम न देखते हैं न सेव करते
          हैं। लॉगिन और कैप्चा आप खुद करते हैं।
        </p>
        <h3>आपके अधिकार (DPDP अधिनियम, 2023)</h3>
        <p>
          आप अपने व्यक्तिगत डेटा की जानकारी, सुधार और मिटाने का अनुरोध कर सकते हैं, और शिकायत दर्ज
          कर सकते हैं। संपर्क: <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>। हम 90 दिनों के
          भीतर जवाब देते हैं। असंतुष्ट होने पर आप भारतीय डेटा संरक्षण बोर्ड में शिकायत कर सकते हैं।
        </p>
      </div>

      <p>
        <em>
          Questions? Write to{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>.
        </em>
      </p>
    </LegalShell>
  );
}
