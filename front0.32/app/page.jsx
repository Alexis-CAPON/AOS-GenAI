import Login from './Login'
import { LoginProvider } from './Context2'
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
  return (
    <LoginProvider>
    <Login></Login>
    </LoginProvider>
  )
}
