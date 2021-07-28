// SPA- single page application
// SSR - server side generation
// SSG - static site generation

// import { useEffect } from "react"

export default function Home(props) {
  
  //  console.log(props.episodes);

  /**
   * SPA
   * só vai chamar quando carregar a página
  useEffect(() => {
    // fetch('http://localhost:3333/episodes')
    fetch('https://3333-apricot-primate-gmcdvapt.ws-us11.gitpod.io/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
   * passando o array vazio, vai carregar apenas 1 vez quando chamar a página
   */
  
  return (
    <h1>home Page</h1>
  )
}

// SSR
// por default, o next tem q executar essa function antes de exibir o conteúdo acima para o usuário
export async function getServerSideProps(){
  const response = await fetch('https://3333-apricot-primate-gmcdvapt.ws-us11.gitpod.io/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    }
  }
}

/**
// SSG
// para páginas estáticas
export async function getStaticProps(){
  const response = await fetch('https://3333-apricot-primate-gmcdvapt.ws-us11.gitpod.io/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8,
  }
}
 */