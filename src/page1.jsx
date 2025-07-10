import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        height: '100dvh',
        margin: 0,
        padding: 0,
        paddingTop: 25,
        background: '#F9FBFD',
        fontFamily: 'Inter, Arial, sans-serif',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        border: '1px solid #ccc',
        overflowX: 'hidden',
        transition: 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s',
        animation: 'fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .button-press {
          transition: transform 0.1s;
        }
        .button-press:active {
          transform: scale(0.97);
        }
      `}</style>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '18px 0 0 18px', gap: 10, boxSizing: 'border-box' }}>
        <span style={{ fontSize: 24, color: '#1A2B49', cursor: 'pointer', marginRight: 8 }} onClick={() => window.history.back()}>&larr;</span>
        <span style={{ fontWeight: 600, fontSize: 20, color: '#1A2B49' }}>Fundly</span>
      </div>

      {/* Title */}
      <div style={{ margin: '28px 0 0 0', padding: '0 24px', boxSizing: 'border-box' }}>
        <div style={{ fontWeight: 600, fontSize: 22, color: '#1A2B49', marginBottom: 24 }}>
          Why We’re the Right Choice
        </div>

        {/* Benefits Section */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 18 }}>
          {/* Icon */}
          <span style={{ fontSize: 32, color: '#1976D2' }}>
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect width="32" height="32" rx="8" fill="#E3F0FF"/><path d="M10 21v-6m4 6v-9m4 9v-3m4 3V9" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="21" r="1" fill="#1976D2"/><circle cx="14" cy="21" r="1" fill="#1976D2"/><circle cx="18" cy="21" r="1" fill="#1976D2"/><circle cx="22" cy="21" r="1" fill="#1976D2"/></g></svg>
          </span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 16, color: '#1A2B49', marginBottom: 4 }}>Benefits of credit limit</div>
            <ul style={{ paddingLeft: 18, margin: 0, color: '#1A2B49', fontSize: 15, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ color: '#1976D2', fontSize: 18, marginRight: 6 }}>✔</span>Pay as per Usage
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ color: '#1976D2', fontSize: 18, marginRight: 6 }}>✔</span>No foreclosure charges
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1976D2', fontSize: 18, marginRight: 6 }}>✔</span>No collateral required
              </li>
            </ul>
          </div>
        </div>

        {/* How it works Section */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 18 }}>
          {/* Icon */}
          <span style={{ fontSize: 32, color: '#1976D2' }}>
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect width="32" height="32" rx="8" fill="#E3F0FF"/><path d="M10 13h12M10 17h12M10 21h6" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="9" width="4" height="14" rx="2" fill="#1976D2"/></g></svg>
          </span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 16, color: '#1A2B49', marginBottom: 4 }}>How it works ?</div>
            <ul style={{ paddingLeft: 18, margin: 0, color: '#1A2B49', fontSize: 15, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ color: '#1976D2', fontSize: 18, marginRight: 6 }}>✔</span>Introduce your business to us
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ color: '#1976D2', fontSize: 18, marginRight: 6 }}>✔</span>Verify your documents online
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1976D2', fontSize: 18, marginRight: 6 }}>✔</span>Get Funds!
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Terms and Continue Button */}
      <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', padding: '0 24px 24px 24px', background: 'transparent', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 18 }}>
          <input type="checkbox" defaultChecked style={{ accentColor: '#1976D2', marginTop: 2, marginRight: 8 }} />
          <span style={{ fontSize: 13, color: '#1A2B49' }}>
            I agree to accept the{' '}
            <a href="#" style={{ color: '#1976D2', fontWeight: 600, textDecoration: 'underline' }}>terms &amp; conditions</a>
            {' '}and authorize Fundly to verify my PAN and retrieve my GST details and credit profile/score from any authorized credit bureau.
          </span>
        </div>
        <button
          onClick={() => {
            const page = document.querySelector('.fade-in');
            if (page) {
              page.style.animation = 'fadeOutLeft 0.5s cubic-bezier(0.4,0,0.2,1)';
              setTimeout(() => navigate('/about'), 400);
            } else {
              navigate('/about');
            }
          }}
          className="button-press fade-in"
          style={{
            width: '100%',
            background: '#195B97',
            color: '#fff',
            fontWeight: 600,
            fontSize: 18,
            border: 'none',
            padding: '14px 0',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(25,91,151,0.08)',
            marginTop: 4,
            boxSizing: 'border-box',
          }}
        >
          Continue
        </button>
      <style>{`
        @keyframes fadeOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-60px);
          }
        }
      `}</style>
      </div>
    </div>
  )
}

export default Home;