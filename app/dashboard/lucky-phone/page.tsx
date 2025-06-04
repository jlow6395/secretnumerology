// Import NavigationWrapper and related pages config at the top
import NavigationWrapper from "@/components/navigation/NavigationWrapper"
import { relatedPagesConfig, pageNavigationConfig } from "@/config/relatedPages"

export default function LuckyPhonePage() {
  return (
    <NavigationWrapper
      relatedPages={relatedPagesConfig["lucky-phone"]}
      pageNavigation={pageNavigationConfig["lucky-phone"]}
    >
      {/* Existing page content */}
      <div>
        <h1>Lucky Phone</h1>
        <p>This is the lucky phone page.</p>
      </div>
    </NavigationWrapper>
  )
}
