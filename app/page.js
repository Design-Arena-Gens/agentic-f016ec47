export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '60px 80px',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '72px',
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          👋 Hello!
        </h1>
        <p style={{
          fontSize: '24px',
          color: '#555',
          margin: '0',
          lineHeight: '1.6'
        }}>
          Welcome to your new application
        </p>
        <div style={{
          marginTop: '40px',
          fontSize: '14px',
          color: '#888'
        }}>
          Built with Next.js & React
        </div>
      </div>
    </div>
  );
}
