import { FormEvent } from "react";
import { useRouter } from 'next/router'
import { Container, Content, Formulario } from '../styles/pages/ForgotPassword'

export default function Home() {
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Enviar!');
  }

  const handleClickGoBack = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.back()
  }

  return (
    <>
      <Container>
        <Content>
          <Formulario onSubmit={handleLogin}>
            <h1>
              Digite o seu e-mail para fazer a recuperação da senha.<br />
              Um link será enviado para o seu e-mail para<br />que você possa redefinir sua senha.
            </h1>
            <input type="text" />
            <div>
              <button onClick={() => { }}>Enviar</button>
              <button onClick={handleClickGoBack}>Voltar</button>
            </div>
          </Formulario>
        </Content>
      </Container>
    </>
  )
}
