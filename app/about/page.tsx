import { SiteShell } from '@/components/site-shell';

const leadershipTeam = [
  {
    name: 'Hon. Kibwana',
    title: 'Founder',
    role: 'Founder and visionary patron of the Coastal Youth Parliament, shaping the movement around youth inclusion, public participation, and economic transformation.',
    image: 'https://raw.githubusercontent.com/maina098/coastalYouthParliament/main/Hon.Kibwana.jpeg.jpeg',
  },
  {
    name: 'Super Sg',
    title: 'Prime Cabinet Secretary',
    role: 'Executive founding committee member supporting Hon. Kibwana in coordinating key cabinet functions and strategic leadership across the movement.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hon. Dulla',
    title: 'Secretary General',
    role: 'Acts as the bridge between Parliament and the Executive, ensuring policy alignment, communication, and effective coordination among leadership structures.',
    image: 'https://raw.githubusercontent.com/maina098/coastalYouthParliament/main/WhatsApp%20Image%202026-08-14%20at%202.19.38%20AM.jpeg',
  },
  {
    name: 'Hon. ODM Cord',
    title: 'Cabinet Secretary for Economic and National Planning',
    role: 'Leads planning, policy direction, and economic development strategies that strengthen youth participation in national and regional growth.',
    image: 'https://raw.githubusercontent.com/maina098/coastalYouthParliament/main/WhatsApp%20Image%202026-08-14%20at%202.19.38%20AM%20(2).jpeg',
  },
  {
    name: 'Hon. Anderson Maina',
    title: 'Cabinet Secretary for ICT',
    role: 'Drives digital transformation, innovation, and technology-driven engagement to strengthen connectivity, communication, and service delivery.',
    image: 'https://scontent.fnbo19-1.fna.fbcdn.net/v/t39.30808-6/711425891_1503813908143381_8960860859503958946_n.jpg?stp=dst-jpg_tt6&cstp=mx972x1296&ctp=s972x1296&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENSZPuqqVAFth2kFDqOaW4-vAHYX-k68v68Adhf6Try5hBFx4Nopq0N-o4XFPLen4zmsOvLVmE_o_-ibXHWRy6&_nc_ohc=3aYB2KKZCk0Q7kNvwGQGX6a&_nc_oc=AdrMQKhHUehASm_O3WVLjSy9slZqd6Iqp3i1xqevxm7ykHil7txL1GDUsbstb50jAIs&_nc_zt=23&_nc_ht=scontent.fnbo19-1.fna&_nc_gid=2Wb0quAnfBZG8KA6VY26hw&_nc_ss=7b2a8&oh=00_AQFSZaUBhj3OPG_3xfPa-h1u26wNRoe016xsqSFM5Rw54A&oe=6A851B45',
  },
];

export default function AboutPage() {
  return (
    <SiteShell
      eyebrow="About Us"
      title="About the Coastal Youth Parliament"
      intro="The Coastal Youth Parliament brings together counties along Kenya’s coast to strengthen economic integration, investment, and regional development."
      showTopBar={false}
      bannerImage="/images/about-cover.jpg"
      bannerCtaLabel="Learn More"
      bannerCtaHref="/about"
    >
      <section className="content-layout">
        <div className="panel-box wide-panel">
          <h3>Vision</h3>
          <p>
            An empowered, united and transformative generation of coastal youth, fully engaged in the governance,
            economic, and social development of their region and their nation.
          </p>
        </div>

        <div className="panel-box wide-panel">
          <h3>Mission</h3>
          <p>
            To organise, capacitate, and amplify the voice of coastal youth through structured advocacy,
            leadership development, and active participation in policy and decision-making processes at the county
            and national level.
          </p>
        </div>

        <div className="panel-box wide-panel">
          <h3>Core mandate</h3>
          <p>
            The bloc aligns county priorities, mobilizes investment, and supports partnerships that
            improve growth, livelihoods, and long-term regional competitiveness.
          </p>
        </div>

        <div className="panel-box wide-panel">
          <h3>Stakeholders</h3>
          <p>
            We work with county governments, private sector actors, development partners, youth groups,
            scholars and community organizations to deliver expansion and opportunity across the region.
          </p>
        </div>
      </section>

      <section className="leadership-section">
        <div className="leadership-header">
          <span className="section-kicker">Leadership</span>
          <h2>Executive Leadership Team</h2>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((leader) => (
            <article className="leader-card" key={leader.name}>
              <img src={leader.image} alt={leader.name} className="leader-image" />
              <div className="leader-body">
                <h3>{leader.name}</h3>
                <p className="leader-title">{leader.title}</p>
                <p>{leader.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
