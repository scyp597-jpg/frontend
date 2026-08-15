import { SiteShell } from '@/components/site-shell';
import { getNews } from '@/lib/api';

const constitutionUrl = 'https://drive.google.com/file/d/1i7RdocrTLs8mcEvKFSeNCBqeSEIsH-PG/view?usp=sharing';
const constitutionPreviewUrl = 'https://drive.google.com/file/d/1i7RdocrTLs8mcEvKFSeNCBqeSEIsH-PG/preview';

export default async function NewsPage() {
  const news = await getNews();
  const items = Array.isArray(news) ? news : [];

  return (
    <SiteShell
      eyebrow="Media Center"
      title="Media Showcase"
      intro="Showcasing various media coverage, stories, and announcements from the Coastal Youth Parliament."
      showTopBar={false}
      bannerImage="/images/mediacenter-cover.jpg"
      bannerCtaLabel="Browse Stories"
      bannerCtaHref="/news"
    >
      <section className="content-layout stack-layout">
        <article className="panel-box story-card">
          <h3>Media Center updates are currently being refreshed.</h3>
          <p>We are clearing old items and preparing new media content for the Coastal Youth Parliament.</p>
        </article>

        <article className="panel-box story-card" id="constitution">
          <div className="panel-head align-start">
            <div>
              <p className="section-kicker">Constitution</p>
              <h2>Constitution of the Coastal Youth Parliament</h2>
            </div>
            <a href={constitutionUrl} target="_blank" rel="noreferrer" className="primary-btn">Open Constitution</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: 24, marginTop: 18 }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #dfeaf5', minHeight: 420, background: '#f4f7fb' }}>
              <iframe
                src={constitutionPreviewUrl}
                title="Constitution preview"
                style={{ width: '100%', height: '100%', minHeight: 420, border: 'none' }}
                allow="autoplay"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="info-card">
                <h3>Purpose</h3>
                <p>The constitution guides leadership, membership, representation, governance, and the collective mission of the Coastal Youth Parliament.</p>
              </div>
              <div className="info-card">
                <h3>What is included</h3>
                <ul className="mandate-list">
                  <li>Membership and eligibility</li>
                  <li>Leadership structures</li>
                  <li>Decision-making principles</li>
                  <li>Rights, duties, and accountability</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>Reference</h3>
                <p>Use this official Google Drive document to visualize and review the full constitution in detail.</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
