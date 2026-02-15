import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot } from 'expo-router'


export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  return (
      <ClerkProvider tokenCache={tokenCache}>
       <Slot />
      </ClerkProvider>
  )
}