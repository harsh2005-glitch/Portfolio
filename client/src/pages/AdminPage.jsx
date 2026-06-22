export default function AdminPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--gradient-hero)',
      fontFamily: 'var(--font-display)',
    }}>
      <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '1rem' }}>Admin Panel</h2>
        <p style={{ color: 'var(--text-tertiary)', marginBottom: '2rem' }}>
          Coming soon — JWT-protected dashboard to manage projects, skills, and messages.
        </p>
        <a href="/" className="btn btn-primary">← Back to Portfolio</a>
      </div>
    </div>
  )
}
