import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5001";

interface Message {
  user: string;
  text: string;
}

interface ChatProps {
  user: string;
}

const Chat: React.FC<ChatProps> = ({ user }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    console.log(newSocket, "ssssssssss");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", (msg: Message) => {
        console.log("first")
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      user: user,
      text: message.trim(),
    };

    socket?.emit("message", newMessage);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-[500px] border border-muted shadow-md ">
      <div className="overflow-y-auto flex-grow">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.user === user ? "text-right" : "text-left"
            } py-2 px-1 my-2 rounded-lg max-w-[80%] `}
          >
            <span className="font-bold">{msg.user}</span>: {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
