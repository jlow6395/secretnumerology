// Import NavigationWrapper and related pages config at the top
import NavigationWrapper from "@/components/navigation/NavigationWrapper"
import { relatedPagesConfig, pageNavigationConfig } from "@/config/relatedPages"

export default function MyNumbersPage() {
  return (
    <NavigationWrapper
      relatedPages={relatedPagesConfig["my-numbers"]}
      pageNavigation={pageNavigationConfig["my-numbers"]}
    >
      <div>
        <h1>My Numbers</h1>
        <p>This is the My Numbers page.</p>
      </div>
    </NavigationWrapper>
  )
}
