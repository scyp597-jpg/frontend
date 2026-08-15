'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import './dashboard.css'

type User = {
  id: string
  email: string
  name: string
}

type Position = {
  id: string
  title: string
  description?: string
  isOpen: boolean
  maxApplicants: number
}

type Application = {
  id: string
  positionId: string
  name: string
  email: string
  county: string
  constituency?: string
  age?: number
  description: string
  reasonForApplying?: string
  changeChampion: string
  status: string
  appliedAt: string
}

const CYP_POSITIONS = [
  'COUNTY YOUTH GOVERNOR',
  'SECRETARY GENERAL',
  'DELEGATE FOR GENDER AND INCLUSION',
  'DELEGATE FOR PWDS AND SPECIAL INTERESTS',
  'LIAISON OFFICER',
]

export default function UserDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  const [elections, setElections] = useState<any[]>([])
  const [positions, setPositions] = useState<Position[]>([])
  const [applications, setApplications] = useState<Application[]>([])
  const [selectedElectionId, setSelectedElectionId] = useState('')
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedPositionId, setSelectedPositionId] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token) {
      router.push('/signin')
      return
    }

    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch {
        // Invalid user data
      }
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/signin')
  }

  const electionRules = [
    {
      title: 'Eligibility & Membership',
      text: 'Only active youth parliament members who meet the prescribed eligibility requirements may contest for office, campaign, or vote in the election process.',
    },
    {
      title: 'Nomination Process',
      text: 'Candidates are required to submit valid nominations, complete the required disclosures, and comply with all timelines published by the electoral committee.',
    },
    {
      title: 'Campaign Conduct',
      text: 'Campaigning must remain peaceful, respectful, and policy-focused. Any form of violence, coercion, hate speech, or misuse of public resources is prohibited.',
    },
    {
      title: 'Voting Procedure',
      text: 'Voting is conducted through approved channels, with strict observance of confidentiality, verification, and transparency at all stages of the process.',
    },
    {
      title: 'Dispute Resolution',
      text: 'Election disputes must be filed formally and reviewed by the designated committee in line with the approved rules and dispute procedures.',
    },
  ]

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="dashboard-layout">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">CYP</div>
          <span className="brand-text">Member Portal</span>
        </div>

        <nav className="sidebar-nav">
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('dashboard'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Dashboard
          </a>
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'profile' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('profile'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            My Profile
          </a>
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'events' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('events'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Events
          </a>
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'news' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('news'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            News
          </a>
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'resources' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('resources'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            Resources
          </a>
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'settings' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('settings'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Settings
          </a>
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'elections' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('elections'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Elections
          </a>
          <a 
            href="#" 
            className={`nav-link ${activeMenu === 'applications' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveMenu('applications'); }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="13" x2="8" y2="13"/>
              <line x1="12" y1="17" x2="8" y2="17"/>
            </svg>
            My Applications
          </a>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-header">
          <div className="header-greeting">
            <h1>Greetings, {user?.name?.split(' ')[0] || 'Member'}!</h1>
            <p>Welcome to your Coastal Youth Parliament dashboard</p>
          </div>
          <div className="header-user">
            <div className="user-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
          </div>
        </header>

        {activeMenu === 'elections' ? (
          <section className="election-panel">
            <div className="section-heading">
              <p className="eyebrow">Election Rules</p>
              <h2>Coastal Youth Parliament Elections</h2>
            </div>

            <div className="election-summary-card">
              <h3>Core election guidelines</h3>
              <p>
                These rules apply to the nomination, campaign, voting, and dispute resolution process for the CYP election cycle. Members are expected to read and comply with them before participating in any election-related activity.
              </p>
            </div>

            <div className="rule-grid">
              {electionRules.map((rule) => (
                <article key={rule.title} className="rule-card">
                  <h3>{rule.title}</h3>
                  <p>{rule.text}</p>
                </article>
              ))}
            </div>

            <div className="election-actions">
              <button type="button" className="primary-action">View official rules</button>
              <button type="button" className="secondary-action">Download guidelines</button>
            </div>
          </section>
        ) : (
          <>
            <div className="kpi-grid">
              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Events Attended</span>
                  <div className="kpi-icon events-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                </div>
                <div className="kpi-value">12</div>
                <div className="kpi-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '48%' }}></div>
                  </div>
                  <span className="progress-label">48% of goal</span>
                </div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Resources Downloaded</span>
                  <div className="kpi-icon resources-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </div>
                <div className="kpi-value">28</div>
                <div className="kpi-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '55%' }}></div>
                  </div>
                  <span className="progress-label">55% of goal</span>
                </div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">News Read</span>
                  <div className="kpi-icon news-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                </div>
                <div className="kpi-value">45</div>
                <div className="kpi-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '87%' }}></div>
                  </div>
                  <span className="progress-label">87% of goal</span>
                </div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span className="kpi-title">Community Score</span>
                  <div className="kpi-icon score-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </div>
                </div>
                <div className="kpi-value">850</div>
                <div className="kpi-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '87%' }}></div>
                  </div>
                  <span className="progress-label">87% of goal</span>
                </div>
              </div>
            </div>

            <div className="activity-section">
              <div className="activity-header">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Your latest interactions with CYP platform</p>
                </div>
                <select className="time-filter">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>

              <div className="activity-table">
                <table>
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Registered for CYP Elections</td>
                      <td>Aug 15, 2026</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Downloaded Economic Blueprint 2030</td>
                      <td>Aug 14, 2026</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                    <tr>
                      <td>RSVP'd for Inaugural Ceremony</td>
                      <td>Aug 13, 2026</td>
                      <td><span className="status-badge pending">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Read: JKP Launches Regional Blueprint</td>
                      <td>Aug 12, 2026</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
