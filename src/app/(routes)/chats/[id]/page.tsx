"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/shadcn/components/ui/input";
import { Button } from "@/shadcn/components/ui/button";

export default function ChatPage() {
  const params = useParams(); // ✅ Correct way to access params in Next.js 14+
  const router = useRouter();
  const chatId = params?.id as string;

  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can I assist you?" },
    { id: 2, sender: "user", text: "Hi! I need some help." },
  ]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { id: messages.length + 1, sender: "user", text: message }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-48px)] bg-gray-100 dark:bg-gray-900">
      {/* Chat Header */}
      <div className="p-4 bg-white dark:bg-gray-800 shadow-md flex items-center">
        <Button variant="ghost" onClick={() => router.push("/chats")} className="mr-2">
          ← Back
        </Button>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Chat Room: {chatId}</h1>
      </div>

      {/* Messages Section */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-3 max-w-xs rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-300 text-gray-900 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white dark:bg-gray-800 flex gap-2 border-t">
        <Input className="flex-1 dark:border-white" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
