import { FormEvent } from "react";
import Link from 'next/link'
import { Container, Content, Formulario } from '../styles/pages/Home'

export default function Home() {

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <Container>
        <Content>
          <Formulario onSubmit={handleLogin}>
            <input type="text" />
            <input type="text" />
            <button>Login</button>
            <Link href="/dashboard">
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
