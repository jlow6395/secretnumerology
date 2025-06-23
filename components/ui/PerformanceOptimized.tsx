import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function LazyImage({ 
  src, 
  alt, 
  className, 
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzc3Ii8+PC9zdmc+",
  blurDataURL,
  onLoad,
  onError 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder */}
      <img
        ref={imgRef}
        src={blurDataURL || placeholder}
        alt=""
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        aria-hidden="true"
      />

      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Loading Shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-gray-200/40 to-gray-300/20 animate-shimmer" />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">ไม่สามารถโหลดรูปภาพได้</div>
          </div>
        </div>
      )}
    </div>
  )
}

interface VirtualizedListProps<T> {
  items: T[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: T, index: number) => React.ReactNode
  className?: string
  overscan?: number
}

export function VirtualizedList<T>({ 
  items, 
  itemHeight, 
  containerHeight, 
  renderItem, 
  className,
  overscan = 5 
}: VirtualizedListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0)
  const scrollElementRef = useRef<HTMLDivElement>(null)

  const visibleItems = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
    const endIndex = Math.min(
      items.length,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    )

    return items.slice(startIndex, endIndex).map((item, index) => ({
      item,
      index: startIndex + index,
      top: (startIndex + index) * itemHeight
    }))
  }, [items, itemHeight, scrollTop, containerHeight, overscan])

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  return (
    <div
      ref={scrollElementRef}
      className={cn("overflow-auto", className)}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map(({ item, index, top }) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top,
              left: 0,
              right: 0,
              height: itemHeight
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}

interface LazyComponentProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
  className?: string
}

export function LazyComponent({ children, fallback, threshold = 0.1, className }: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}

interface MemoizedCardProps {
  title: string
  description: string
  value: number
  icon: React.ReactNode
  className?: string
  onClick?: () => void
}

export const MemoizedCard = React.memo(function MemoizedCard({ 
  title, 
  description, 
  value, 
  icon, 
  className,
  onClick 
}: MemoizedCardProps) {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02]",
        "backdrop-blur-2xl border border-white/10 rounded-3xl p-6",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(255,255,255,0.05)_inset]",
        "transition-all duration-300 hover:scale-105 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div className="text-2xl font-bold text-blue-400">{value}</div>
      </div>
    </div>
  )
})

interface OptimizedGridProps {
  children: React.ReactNode
  columns?: number
  gap?: number
  className?: string
}

export function OptimizedGrid({ children, columns = 2, gap = 16, className }: OptimizedGridProps) {
  const gridStyle = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
    willChange: 'transform'
  }), [columns, gap])

  return (
    <div className={className} style={gridStyle}>
      {children}
    </div>
  )
}

interface DebounceInputProps {
  value: string
  onChange: (value: string) => void
  delay?: number
  placeholder?: string
  className?: string
}

export function DebounceInput({ value, onChange, delay = 300, placeholder, className }: DebounceInputProps) {
  const [inputValue, setInputValue] = useState(value)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      onChange(newValue)
    }, delay)
  }, [onChange, delay])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn(
        "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl",
        "text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50",
        "transition-all duration-200",
        className
      )}
    />
  )
}

interface CacheProviderProps {
  children: React.ReactNode
  maxSize?: number
}

interface CacheContextType {
  get: (key: string) => any
  set: (key: string, value: any) => void
  clear: () => void
}

const CacheContext = React.createContext<CacheContextType | null>(null)

export function CacheProvider({ children, maxSize = 100 }: CacheProviderProps) {
  const cache = useRef(new Map())

  const cacheAPI = useMemo(() => ({
    get: (key: string) => cache.current.get(key),
    set: (key: string, value: any) => {
      if (cache.current.size >= maxSize) {
        const firstKey = cache.current.keys().next().value
        cache.current.delete(firstKey)
      }
      cache.current.set(key, value)
    },
    clear: () => cache.current.clear()
  }), [maxSize])

  return (
    <CacheContext.Provider value={cacheAPI}>
      {children}
    </CacheContext.Provider>
  )
}

export function useCache() {
  const context = React.useContext(CacheContext)
  if (!context) {
    throw new Error('useCache must be used within a CacheProvider')
  }
  return context
}

interface PreloadLinkProps {
  href: string
  as?: 'script' | 'style' | 'font' | 'image'
  crossOrigin?: 'anonymous' | 'use-credentials'
}

export function PreloadLink({ href, as = 'script', crossOrigin }: PreloadLinkProps) {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    if (crossOrigin) {
      link.crossOrigin = crossOrigin
    }
    
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [href, as, crossOrigin])

  return null
}

interface BatchUpdaterProps<T> {
  items: T[]
  batchSize?: number
  delay?: number
  onBatch: (batch: T[]) => void
  children: (processedItems: T[]) => React.ReactNode
}

export function BatchUpdater<T>({ 
  items, 
  batchSize = 10, 
  delay = 16, 
  onBatch, 
  children 
}: BatchUpdaterProps<T>) {
  const [processedItems, setProcessedItems] = useState<T[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= items.length) return

    const timeoutId = setTimeout(() => {
      const nextBatch = items.slice(currentIndex, currentIndex + batchSize)
      onBatch(nextBatch)
      setProcessedItems(prev => [...prev, ...nextBatch])
      setCurrentIndex(prev => prev + batchSize)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [items, currentIndex, batchSize, delay, onBatch])

  useEffect(() => {
    // Reset when items change
    setProcessedItems([])
    setCurrentIndex(0)
  }, [items])

  return <>{children(processedItems)}</>
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  })

  useEffect(() => {
    let lastTime = performance.now()
    let frameCount = 0

    const measurePerformance = () => {
      const currentTime = performance.now()
      const deltaTime = currentTime - lastTime
      frameCount++

      if (deltaTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / deltaTime)
        const memory = (performance as any).memory?.usedJSHeapSize || 0
        
        setMetrics({
          renderTime: deltaTime / frameCount,
          memoryUsage: memory / (1024 * 1024), // MB
          fps
        })

        frameCount = 0
        lastTime = currentTime
      }

      requestAnimationFrame(measurePerformance)
    }

    const animationId = requestAnimationFrame(measurePerformance)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return metrics
} 