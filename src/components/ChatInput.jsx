import { useState } from 'react';
import { Send } from 'lucide-react';
import './ChatInput.css';

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Escribe tu mensaje..."
        disabled={disabled}
        rows={1}
      />
      <button type="submit" disabled={disabled || !message.trim()}>
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;
