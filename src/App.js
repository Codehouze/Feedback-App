import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
  
   <Router>
      <Header />
      
        <div className="container">
          <Routes>
            <Route 
          path='/'
          element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
              }

            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
        {/* <div className="footer">
          <h2>
            Powered by<a href="https://github.com/Codehouze"> Codehouze</a>
          </h2>
        </div> */}
      </Router>
    
  );
}

export default App;
