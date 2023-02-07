// App.tsx

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

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
// export App;
