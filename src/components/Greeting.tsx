import { useState } from 'preact/hooks';

interface Props {
  messages: string[];
}

export function Greeting({ messages }: Props) {
  const [message, setMessage] = useState<string>(messages[0]);

  const getRandomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const handleClick = () => {
    setMessage(getRandomMessage());
  };

  return (
    <div>
      <h3>{message}!</h3>
      <button onClick={handleClick}>New Greeting</button>
    </div>
  );
}
