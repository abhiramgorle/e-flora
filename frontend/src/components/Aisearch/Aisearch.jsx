import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import './Aisearch.css'; // Import CSS file for styles

function Aisearch({ productName }) { // Accept productName as a prop
  const [question, setQuestion] = useState(productName); // Pre-fill input field with productName
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading.....");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCTYqcwmIWKOEqPz5R8Hum_A5Bss-T7fSw",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }], // Use productName instead of question
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="bg-white h-screen p-3">
        <form
          onSubmit={generateAnswer}
          className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
        >
          <textarea
            required
            className="border rounded w-11/12 my-2 min-h-fit p-3"
            value={question} // Pre-fill input field with productName
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>
        <div className="w-full md:w-2/3 m-auto text-left rounded bg-gray-50 m-1">
          <ReactMarkdown className="p-3">{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Aisearch;
