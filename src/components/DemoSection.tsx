import { useState } from "react";
import { Send } from "lucide-react";
import logoLetterImg from "@/assets/logo-letter.png";

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
    <section id="demo" className="section-light rounded-tl-2xl rounded-tr-2xl -mt-4 relative z-10 px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <p className="label-amber mb-3">Proof of Competence</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
            Experience 10x faster lead qualification now
          </h2>
          <p className="text-zinc-500 text-base md:text-lg mb-8">
            This is a live demonstration of how our AI agent handles inbound inquiries. It qualifies leads, provides market data, and routes hot prospects to your team in seconds.
          </p>
          <ul className="space-y-4">
            {[
              "Responds to leads in under 3 seconds, 24/7",
              "Pulls real-time data from Dubai REST and property portals",
              "Hands off qualified leads to your agents with full context",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                </span>
                <span className="text-neutral-900 font-medium text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right chat UI */}
        <div className="bg-neutral-900 rounded-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-neutral-800 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 rounded-xl p-1.5">
                <img src={logoLetterImg} alt="A" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <div className="text-white font-semibold">Advancify AI Agent</div>
                <div className="text-green-400 text-xs font-medium">Online now</div>
              </div>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 space-y-4 max-h-80 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                {msg.role === "bot" && (
                  <div className="bg-amber-500 rounded-xl p-1.5 flex-shrink-0">
                    <img src={logoLetterImg} alt="A" className="w-5 h-5 object-contain" />
                  </div>
                )}
                <div
                  className={`max-w-xs rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "bot"
                      ? "bg-white text-neutral-900"
                      : "bg-neutral-700 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="px-5 py-3 border-t border-neutral-800">
            <p className="text-stone-400 text-xs mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="flex items-center gap-1.5 border border-neutral-600 text-white text-xs rounded-full px-3 py-1.5 hover:border-amber-500 hover:text-amber-400 transition-colors"
                >
                  <Send size={10} />
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="px-5 pb-5 pt-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask the AI agent..."
              className="flex-1 bg-neutral-800 border border-neutral-700 text-white rounded-xl px-4 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={() => send(input)}
              className="bg-amber-500 hover:bg-amber-400 text-neutral-900 rounded-xl px-4 py-2.5 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
