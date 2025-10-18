import { useState, useRef, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import { MessageCircle } from 'lucide-react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (userMessage) => {
    // Add user message
    const newUserMessage = { text: userMessage, isUser: true };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del webhook');
      }

      const data = await response.json();
      const botMessage = { text: data.reply, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        text: '❌ Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta nuevamente.',
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">
          <MessageCircle size={24} />
          <h1>Chatbot Phasmo</h1>
        </div>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="empty-state">
              <MessageCircle size={64} />
              <h2>¡Bienvenido!</h2>
              <p>Escribe un mensaje para comenzar la conversación</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isUser={msg.isUser}
              />
            ))
          )}
          {isLoading && (
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}

export default App;
