import { useState } from 'react'
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from './Components/FeedbackForm';

function App() {
  const[feedback, setFeedback]=useState(FeedbackData)
  const deleteFeedback =(id)=>{
    if(window.confirm('Are you sure you want to delete ?')){
      setFeedback(feedback.filter((item) => item.id!==id))
    }
  }
 return (
    <>
    <Header   />
    <FeedbackForm />
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    
    </>
 )
}

export default App;
