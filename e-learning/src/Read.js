import React, { useEffect, useState } from 'react';

const HtmlTutorial = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/htmlTutorial')
    .then((response) => response.json())
    .then(data => {
      alert('Form submission data:', data);
    })
     
  }, []);

 

  return (
    <div>
      <h1>HTML Tutorial</h1>
      {data && (
        <div>
          <h2>Introduction</h2>
          <p>{data.Introduction['What is HTML?']}</p>
          
          <h2>HTML Versions</h2>
          <ul>
            {data.HTMLVersions.Versions.map(version => (
              <li key={version.Version}>
                {version.Version} - {version.Year}
              </li>
            ))}
          </ul>
          
          <h2>HTML Tags</h2>
          <p>{data.HTMLTags.Introduction}</p>
          <p><img src={data.HTMLTags.ImageSource} alt="HTML Tags Example" /></p>
          
          <h2>Web Browsers</h2>
          <p>{data.WebBrowsers.Introduction}</p>
          
          <h2>HTML Page Structure</h2>
          <p>{data.HTMLPageStructure.Introduction}</p>
          <pre>
            {data.HTMLPageStructure.Example.HTMLPageStructure.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </pre>
          <p>{data.HTMLPageStructure.Example.Explanation}</p>
          
          <h3>Details</h3>
          <ul>
            {Object.entries(data.HTMLPageStructure.Details).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
          
          {/* Continue rendering other sections similarly */}
        </div>
      )}
    </div>
  );
};

export default HtmlTutorial;
