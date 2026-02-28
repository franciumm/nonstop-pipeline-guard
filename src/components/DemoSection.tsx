import { useState } from "react";
import { Send } from "lucide-react";
// import logoLetterImg from "@/assets/logo-letter.png"; // Uncomment if needed

const RobotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const suggestions = [
  "What's the ROI on Marina Gate?",
  "Any off-plan options?",
  "Schedule a viewing?",
];

const initialMessages = [
  {
    role: "bot",
    text: "Welcome to Advancify. I can help you find the perfect property in Dubai. What are you looking for today?",
  },
  {
    role: "user",
    text: "I need a 2-bedroom apartment in Dubai Marina under AED 2M.",
  },
  {
    role: "bot",
    text: "I found 14 listings matching your criteria in Dubai Marina. The top match is a 2BR at Marina Gate, 1,350 sqft, AED 1.85M with marina views. Shall I schedule a viewing or send you the full list?",
  },
];

const DemoSection = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "bot", text: "Great question! Our AI agents are analyzing real-time data from Dubai REST and property portals to give you the best answer. Would you like me to notify your agent with this lead?" },
    ]);
    setInput("");
  };

  return (
    <section id="demo" className="bg-[#F9FAFB] rounded-t-[18px] relative z-20 px-6 md:px-16 lg:px-24 py-24 -mt-3">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left copy */}
        <div>
          <p className="label-amber mb-5">PROOF OF COMPETENCE</p>
          <h2 className="text-4xl font-bold text-neutral-900 mb-6 leading-tight">
            Experience 10x faster lead qualification now
          </h2>
          {/* Increased text size to text-xl */}
          <p className="text-zinc-600 mb-8 leading-relaxed">
            This is a live demonstration of how our AI agent handles inbound inquiries. It qualifies leads, provides market data, and routes hot prospects to your team in seconds.
          </p>
          <ul className="space-y-5">
            {[
              "Responds to leads in under 3 seconds, 24/7",
              "Pulls real-time data from Dubai REST and property portals",
              "Hands off qualified leads to your agents with full context",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                {/* Tighter Premium Pulse Effect */}
                <div className="relative flex items-center justify-center w-4 h-4 mt-1.5 flex-shrink-0">
                  {/* The pulsing aura (Reduced to h-3 w-3 for a smaller radius) */}
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#F59E0B] opacity-50"></span>
                  {/* The solid center dot */}
                  <span className="relative z-10 w-2 h-2 bg-[#F59E0B] rounded-full"></span>
                </div>
                <span className="text-neutral-900 font-medium text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right chat UI */}
        <div className="bg-[#111111] rounded-[24px] overflow-hidden flex flex-col w-full max-w-[608px] h-[701px] shadow-2xl">
          {/* Header */}
          <div className="w-full bg-[#4E4E4E] border-b border-[#F7F7F7]/20 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center shrink-0 text-white">
                <RobotIcon />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-white text-[18.2px] leading-tight">Advancify AI Agent</div>
                <div className="text-green-400 text-xs  mt-0.5">Online now</div>
              </div>
            </div>
            {/* Breathing Green Dot */}
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto [&::-webkit-scrollbar]:hidden">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 items-end ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                {msg.role === "bot" && (
                  <div className="w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center shrink-0 text-white">
                    <RobotIcon />
                  </div>
                )}
                {msg.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-[#4E4E4E] flex items-center justify-center flex-shrink-0 text-white">
                    <UserIcon />
                  </div>
                )}
                <div
                  className={`max-w-xs rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${msg.role === "bot"
                    ? "bg-[#F7F7F7] text-gray-800 rounded-bl-sm"
                    : "bg-[#333333] text-white rounded-br-sm"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions Footer */}
          <div className="px-6 py-6 border-t border-[#F7F7F7]/10 bg-[#111111]">
            <p className="text-[#888888] text-xs mb-3 font-medium">Try asking:</p>
            <div className="flex flex-wrap gap-2.5">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="flex items-center gap-2 border border-white/20 text-white text-xs rounded-full px-4 py-2 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Send size={12} className="opacity-70" />
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;