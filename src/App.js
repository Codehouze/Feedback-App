import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./Context/FeedbackContext";
import AboutIconLink from "./Components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
    </FeedbackProvider>
  );
}

export default App;
