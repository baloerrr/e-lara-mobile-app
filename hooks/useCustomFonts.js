import { useFonts } from 'expo-font'

const useCustomFonts = () => {
    let [fontsLoaded] = useFonts({
        'Modernist-Bold': require('../assets/fonts/modernist/Modernist-Bold.otf'),
        'Modernist-Mono': require('../assets/fonts/modernist/Modernist-Mono.otf'),
        'Modernist-Regular': require('../assets/fonts/modernist/Modernist-Regular.otf'),
    })

    return fontsLoaded
}

export default useCustomFonts