import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, rating: 5, text: "Checking the network cables, modem and router 1" },
    {
      id: 2,
      rating: 8,
      text: "Checking the network cables, modem and router 2",
    },
    {
      id: 3,
      rating: 7,
      text: "Checking the network cables, modem and router 3",
    },
  ]);

  const [feedbackEdit , setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
 //update feedback items
 const updateFeedback =(id,updItem)=>{
   console.log(id,updItem)
 }
  const editFeedback =(item)=>setFeedbackEdit({
    item,
    edit:true
  })
  return (
    <FeedbackContext.Provider value={{ feedback,feedbackEdit, deleteFeedback, addFeedback,editFeedback,updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
