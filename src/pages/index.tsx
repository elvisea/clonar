import { FormEvent } from "react";
import Link from 'next/link'
import { Container, Content, Formulario } from '../styles/pages/Home'

export default function Home() {

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Fazer Login');
  }

  return (
    <>
      <Container>
        <Content>
          <Formulario onSubmit={handleLogin}>
            <input placeholder="Email" />
            <input placeholder="Senha" />
            <button>Login</button>
            <Link href="/forgot-password">
              <a>
                <span>Esqueci Minha Senha!</span>
              </a>
            </Link>
          </Formulario>
        </Content>
      </Container>
    </>
  )
}
