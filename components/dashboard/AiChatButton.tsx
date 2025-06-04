import { MessageSquare } from "lucide-react"

export default function AiChatButton() {
  return (
    <button className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-[#00ffaa] to-[#00a3ff] px-4 py-2 text-sm font-medium text-black transition-all hover:shadow-lg">
      <MessageSquare className="h-4 w-4" />
      <span>AI Chat</span>
    </button>
  )
}
