import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import AssistantIcon from '../../Components/Common/Assistant/AssistantIcon';
import './Assistant.css';
import { BounceLoader } from 'react-spinners';
import { TbSend } from "react-icons/tb";

type ChatMessage = {
  sender: 'user' | 'assistant';
  text: string;
};

const Assistant = () => {
  const [prompt, setPrompt] = useState('');
  const [loader, setLoader] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory));
      } catch (err) {
        console.error("Error parsing saved chat history:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const fetchGeminiResponse = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    setChatHistory(prev => [...prev, { sender: 'user', text: prompt }]);
    setPrompt('');
    setLoader(true);

    try {
      const response = await fetch('http://localhost:3000/api/generate', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const aiText = data?.result || "No response received";

      setChatHistory(prev => [...prev, { sender: 'assistant', text: aiText }]);

    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      setChatHistory(prev => [
        ...prev,
        { sender: 'assistant', text: "Something went wrong. Please try again." }
      ]);
    } finally {
      setLoader(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <div className='assistant-main-div'>
      <div className='assistant-head-div'>
        <h1>Assistant</h1>
        <AssistantIcon />
      </div>

      <div className='assistant-body'>
        {chatHistory.map((msg, idx) => (
          <div
            key={idx}
            className={msg.sender === 'user' ? 'user-message' : 'assistant-response'}
          >
            <p>{msg.text}</p>
          </div>
        ))}

        {loader && (
          <div className='assistant-response'>
            <BounceLoader size={30} color="#959c9aff" />
          </div>
        )}
      </div>

      <form className='assistant-footer' onSubmit={fetchGeminiResponse}>
        <input
          type='text'
          placeholder='Ask anything'
          value={prompt}
          onChange={handleChange}
        />
        <button type="submit" style={{ background: 'none', border: 'none' }}>
          <TbSend size={25} />
        </button>
      </form>
    </div>
  );
};

export default Assistant;
