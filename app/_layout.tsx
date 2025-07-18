import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ScreenWrapper from "@/components/ScreenWrapper";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth";

    if (!user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth/index");
    } else if (user && inAuthGroup && !isLoadingUser) {
      router.replace("/");
    }
  }, [user, segments]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScreenWrapper>
        <AuthProvider>
          <PaperProvider>
            <SafeAreaProvider>
              <RouteGuard>
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen name="auth" options={{ headerShown: false }} />

                </Stack>
              </RouteGuard>
            </SafeAreaProvider>
          </PaperProvider>
        </AuthProvider>
      </ScreenWrapper>
    </GestureHandlerRootView>
  );
}
