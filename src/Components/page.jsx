import React, { useState, useEffect } from 'react';
import "./page.css";


const Page = () => {
  const [issues, setIssues] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const fetchIssues = async () => {
    const response = await fetch(`https://api.github.com/repositories/1296269/issues?page=${currentPageNumber}&per_page=5`);
    const data = await response.json();
    setIssues(data);
  };

  useEffect(() => {
    fetchIssues();
  }, [currentPageNumber]);

  const handleLoadPrev = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };

  const handleLoadNext = () => {
    setCurrentPageNumber(currentPageNumber + 1);
  };

  return (
    <div>
      <h1>GITHUB ISSUES LIST</h1>
      <ol id='container'>
        {issues.map((issue , index)  => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ol>
      <button onClick={handleLoadPrev}  className="btns" id="load_prev" >Previous</button>
      <button onClick={handleLoadNext}  className="btns" id="load_next" >Next</button>
      <h3>Page number {currentPageNumber}</h3>
    </div>
  );
}

export default Page;


