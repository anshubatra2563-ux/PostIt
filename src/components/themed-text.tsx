import { Text, type TextProps, StyleSheet, useColorScheme } from 'react-native'

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'link'
}

export function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  const colorScheme = useColorScheme()
  const color = colorScheme === 'dark' ? '#ECEDEE' : '#11181C'

  return (
    <Text
      style={[
        { color },
        type === 'title' && styles.title,
        type === 'link' && styles.link,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  link: {
    color: '#0a7ea4',
  },
})