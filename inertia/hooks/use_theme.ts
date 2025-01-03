import { useContext } from 'react'
import { ThemeProviderContext } from '~/theme/theme_context'

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
