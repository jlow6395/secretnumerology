import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface NumberCardProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  bgImage: string
  views?: string
  likes?: string
  slug: string
}

export default function NumberCard({
  title,
  subtitle,
  description,
  icon: Icon,
  bgImage,
  views,
  likes,
  slug,
}: NumberCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-gray-900 border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-[1.02] hover:border-gray-700">
      <div className="relative h-48">
        <img
          src={bgImage || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30">
              <Icon className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-emerald-300">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center space-x-4 text-sm text-gray-400">
          {views && (
            <div className="flex items-center">
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>{views}</span>
            </div>
          )}
          {likes && (
            <div className="flex items-center">
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{likes}</span>
            </div>
          )}
        </div>

        <p className="mb-4 text-sm text-gray-300 line-clamp-3">{description}</p>

        <Link href={`/numbers/${slug}`}>
          <button className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-center font-medium text-white transition-all hover:bg-gray-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
            ดูรายละเอียด
          </button>
        </Link>
      </div>
    </div>
  )
}
