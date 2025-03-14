import "../global.css"
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: '#6200ea' },
                headerTintColor: '#ffffff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        />
    );
}
