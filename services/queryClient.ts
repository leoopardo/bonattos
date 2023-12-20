import { QueryCache, QueryClient } from "@tanstack/react-query";

let unauthorizedNotificationShown = false; // Variável para controlar se a notificação já foi exibida

export const queryClient = new QueryClient({
  queryCache: new QueryCache({ 
  }),
 
});