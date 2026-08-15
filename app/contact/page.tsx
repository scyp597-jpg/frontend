import { SiteShell } from '@/components/site-shell';

export default function ContactPage() {
  return (
    <SiteShell
      eyebrow="Contact"
      title="Talk to the CYP secretariat"
      intro="We welcome partnerships, invitations, and inquiries from investors, institutions, media, and community stakeholders."
      showTopBar={false}
      bannerImage="/images/contact-cover.jpg"
      bannerCtaLabel="Get In Touch"
      bannerCtaHref="/contact"
    >
      <section className="content-layout two-column-layout contact-cover">
        <div className="panel-box wide-panel">
          <h3>Send us a message</h3>
          <form className="legacy-form">
            <div className="field-row">
              <label>
                Full name
                <input type="text" placeholder="Your name" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Email address
                <input type="email" placeholder="you@example.com" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Subject
                <input type="text" placeholder="How can we help?" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Message
                <textarea rows={5} placeholder="Tell us more..." />
              </label>
            </div>
            <button type="submit" className="primary-btn">Submit Inquiry</button>
          </form>
        </div>

        <aside className="panel-box side-panel">
          <h3>Contact details</h3>
          <ul className="info-list">
            <li><strong>Email:</strong> Coastalyouthparliament@gmail.com</li>
            <li><strong>Phone:</strong> +254 712 511773</li>
            <li><strong>Office:</strong> Coast Region Secretariat</li>
            <li><strong>Hours:</strong> Monday – Friday, 8:30am – 5:00pm</li>
          </ul>
        </aside>
      </section>
    </SiteShell>
  );
}
