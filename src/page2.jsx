import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageTwo = () => {
  const navigate = useNavigate();
  const [pan, setPan] = React.useState('CEAPA2190O');
  const [fileName, setFileName] = React.useState('');
  const fileInputRef = React.useRef(null);

  // Animate back to page1
  const handleBack = () => {
    const page = document.querySelector('.fade-in');
    if (page) {
      page.style.animation = 'fadeOutLeft 0.5s cubic-bezier(0.4,0,0.2,1)';
      setTimeout(() => navigate('/'), 400);
    } else {
      navigate('/');
    }
  };

  return (
    <div
      className="fade-in"
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
        border: '1px solid #ccc',
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
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '18px 0 0 18px', gap: 10 }}>
        <span style={{ fontSize: 24, color: '#1A2B49', cursor: 'pointer', marginRight: 8 }} onClick={handleBack}>&larr;</span>
        <span style={{ fontWeight: 600, fontSize: 20, color: '#1A2B49' }}>Enter your PAN</span>
      </div>

      {/* Subtitle */}
      <div style={{ color: '#7A8CA6', fontSize: 15, margin: '8px 0 0 18px' }}>
        We need this to check your eligibility
      </div>

      {/* PAN Input */}
      <div style={{ margin: '32px 24px 0 24px' }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#E23B3B', marginBottom: 4 }}>
          Enter PAN Number
        </div>
        <input
          type="text"
          value={pan}
          onChange={e => setPan(e.target.value)}
          placeholder="Enter PAN Number"
          style={{
            width: '100%',
            padding: '14px 12px',
            fontSize: 17,
            border: '2px solid #E23B3B',
            borderRadius: 8,
            outline: 'none',
            marginBottom: 2,
            background: '#fff',
            color: '#1A2B49',
            fontWeight: 500,
            boxSizing: 'border-box',
          }}
        />
        <div style={{ color: '#E23B3B', fontSize: 13, margin: '2px 0 0 4px', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 16 }}>●</span> Enter a valid PAN (Eg: CEDP9584P)
        </div>
      </div>

      {/* Upload PAN Image */}
      <div
        style={{
          margin: '28px 24px 0 24px',
          border: '2px dashed #1976D2',
          borderRadius: 12,
          background: '#fff',
          padding: '32px 0',
          textAlign: 'center',
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
      >
        <input
          type="file"
          accept="image/*,application/pdf"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setFileName(e.target.files[0].name);
            }
          }}
        />
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontSize: 32, color: '#1976D2' }}>
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect width="32" height="32" rx="8" fill="#E3F0FF"/><path d="M16 10v8m0 0l-3-3m3 3l3-3" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
          </span>
        </div>
        <div style={{ color: '#195B97', fontWeight: 600, fontSize: 17, marginBottom: 2 }}>
          {fileName ? fileName : 'Upload your PAN image'}
        </div>
        <div style={{ color: '#7A8CA6', fontSize: 13 }}>
          (JPG, JPEG, PNG, PDF – Max 10MB)
        </div>
      </div>

      {/* Why provide PAN? */}
      <div style={{ margin: '16px 24px 0 24px', display: 'flex', alignItems: 'center', color: '#1976D2', fontSize: 15, cursor: 'pointer' }}>
        <span style={{ fontSize: 18, marginRight: 6 }}>ⓘ</span>
        <span>Why should i provide PAN Number ?</span>
      </div>
    </div>
  );
};

export default PageTwo;
