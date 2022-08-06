import {
  Inter_600SemiBold,
  Inter_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/inter'

export const useGoogleFonts = () => {
  const [fontsLoaded, error] = useFonts({
    Inter_800ExtraBold,
    Inter_600SemiBold,
  })

  return { fontsLoaded, error }
}
