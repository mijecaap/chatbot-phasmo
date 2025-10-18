import ReactMarkdown from 'react-markdown';
import { User, Bot } from 'lucide-react';
import './ChatMessage.css';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-icon">
        {isUser ? <User size={20} /> : <Bot size={20} />}
      </div>
      <div className="message-content">
        {isUser ? (
          <p>{message}</p>
        ) : (
          <ReactMarkdown>{message}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
