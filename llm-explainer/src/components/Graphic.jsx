export default function Graphic({ activeStep }) {
  console.log("🔍 activeStep =", activeStep);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 10,
        position: 'relative',
      }}
    >
      {activeStep === 0 && (
        <svg
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: '90%',
            maxWidth: '600px',
            height: 'auto',
            backgroundColor: '#bfdbfe',
            border: '1px solid black',
          }}
        >
          <rect x="10" y="40" width="40" height="20" fill="#3b82f6" stroke="black" />
          <text x="30" y="55" textAnchor="middle" fill="white" fontSize="10">Input</text>
        </svg>
      )}

      {activeStep === 1 && (
        <svg
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: '90%',
            maxWidth: '600px',
            height: 'auto',
            backgroundColor: '#fef9c3',
            border: '1px solid black',
          }}
        >
          <circle cx="60" cy="50" r="20" fill="#f59e0b" stroke="black" />
          <text x="60" y="55" textAnchor="middle" fill="white" fontSize="10">Attend</text>
        </svg>
      )}

      {activeStep === 2 && (
        <svg
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: '90%',
            maxWidth: '600px',
            height: 'auto',
            backgroundColor: '#d1fae5',
            border: '1px solid black',
          }}
        >
          <line x1="10" y1="50" x2="190" y2="50" stroke="#10b981" strokeWidth="4" />
          <text x="100" y="70" textAnchor="middle" fill="#10b981" fontSize="12">Encoding</text>
        </svg>
      )}

      {activeStep === 3 && (
        <svg
          viewBox="0 0 200 100"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: '90%',
            maxWidth: '600px',
            height: 'auto',
            backgroundColor: '#ede9fe',
            border: '1px solid black',
          }}
        >
          <polygon points="100,10 120,90 80,90" fill="#8b5cf6" stroke="black" />
          <text x="100" y="50" textAnchor="middle" fill="white" fontSize="12">Output</text>
        </svg>
      )}
    </div>
  );
}