import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
// import Login from "./Components/Login";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import Footer from "./Components/Footer";
import { FeedbackProvider } from "./Context/FeedbackContext";
import AboutIconLink from "./Components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            {/* <Route path="/" element={ <Login />} /> */}

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
        </div>
        <AboutIconLink />
        <Footer />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
