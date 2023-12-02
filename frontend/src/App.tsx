import { QueryClient, QueryClientProvider } from 'react-query'

import { ModalProvider } from 'src/components/ModalContext'
import TodoPage from 'src/pages/TodoPage'

import 'src/App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false, refetchOnMount: false },
  },
})

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <TodoPage />
      </ModalProvider>
    </QueryClientProvider>
  )
}

export default App
