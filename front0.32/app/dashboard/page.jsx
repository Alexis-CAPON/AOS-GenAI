import MainPage from './MainPage'
import LoadingScreen from './LoadingScreen'
import { Suspense } from 'react';
import { ConversationProvider } from './Context'

export default function Page() {

  return (
    <ConversationProvider>
    <Suspense fallback={<LoadingScreen />}>
      <MainPage></MainPage>
    </Suspense>
    </ConversationProvider>
  )
}
