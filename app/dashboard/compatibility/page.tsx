// Import NavigationWrapper and related pages config at the top
import NavigationWrapper from "@/components/navigation/NavigationWrapper"
import { relatedPagesConfig, pageNavigationConfig } from "@/config/relatedPages"

export default function CompatibilityPage() {
  return (
    <NavigationWrapper
      relatedPages={relatedPagesConfig["compatibility"]}
      pageNavigation={pageNavigationConfig["compatibility"]}
    >
      {/* Existing page content */}
      <div>
        <h1>Compatibility Page</h1>
        <p>This is the compatibility page content.</p>
      </div>
    </NavigationWrapper>
  )
}
