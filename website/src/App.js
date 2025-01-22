import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">DS 6371 - Unit 3</h1>
        <div className="status">Under Development</div>
        
        <h2 className="subtitle">Statistical Foundations for Data Science</h2>
        
        <div className="content">
          <p>
            Welcome to my digital garden for Unit 3 of DS 6371. This space is currently
            under development and will soon feature an interactive collection of notes,
            insights, and applications of statistical concepts covered in this unit.
          </p>
          
          <p>
            The upcoming content will include comprehensive coverage of:
          </p>
          <ul style={{ textAlign: 'left' }}>
            <li>Statistical Assumptions and Their Importance</li>
            <li>Data Screening Techniques</li>
            <li>Transformation Methods</li>
            <li>Practical Applications in Data Science</li>
          </ul>
        </div>

        <div className="coming-soon">
          Content is being cultivated and will be available soon...
        </div>

        <div className="links">
          <a href="https://github.com/jonx0037/ds6371-unit3" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <a href="mailto:jarocha@smu.edu">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
