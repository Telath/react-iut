// App.tsx

import React from "react";
import { LoginScreen } from "./src/screens/LoginScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StarshipFeedScreen />
    </QueryClientProvider>
    // <LoginScreen />
    // <TermsScreen />
    // <StarshipFeedScreen />
  );
};

// always export default App otherwise Expo is not happy
export default App;