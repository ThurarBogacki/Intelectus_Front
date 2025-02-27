import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/auth/login'); // Redireciona para a tela de login automaticamente
}
