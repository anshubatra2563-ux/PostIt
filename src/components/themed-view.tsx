import { View, type ViewProps, useColorScheme } from 'react-native'

export function ThemedView({ style, ...props }: ViewProps) {
  const colorScheme = useColorScheme()
  const backgroundColor = colorScheme === 'dark' ? '#151718' : '#fff'
  return <View style={[{ backgroundColor }, style]} {...props} />
}