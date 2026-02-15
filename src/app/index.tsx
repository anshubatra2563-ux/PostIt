import { Text, View } from "react-native"
import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Link href="about">
                Hello from app
            </Link>
        </SafeAreaView>
    )
}
