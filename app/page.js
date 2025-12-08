import { redirect } from 'next/navigation';

export default function Page() {
  // redirect root "/" to the existing "/home" page
  redirect('/home');
}
