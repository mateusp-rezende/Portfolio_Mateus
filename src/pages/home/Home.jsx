import styles from './home.module.css';
import FlipCard from "../../components/FlipCard";
import Terminal from "../../components/terminal";

// Seus imports de imagem existentes
import microlaser from "../../assets/microlaser.png";
import c2b from "../../assets/c2b.png";
import logo from "../../assets/logo.png";
import simboloc from "../../assets/simbolo-c.png";
import gerenciadordevagas from "../../assets/gestaoVagas.png";
import gestordepedidos from "../../assets/GestorPedidos.png";
// Importe a imagem do Zelus (certifique-se de ter o arquivo na pasta assets)
import zelusImg from "../../assets/zelus.png"; 

function Home() {
  return (
    <div className={styles.home_container}>
      <Terminal/>
      
      {/* --- SESSÃO DE DESTAQUE --- */}
      <h2 className={styles.section_title}><span>PROJETO DESTAQUE</span></h2>
      
      <div className={styles.destaque_area}>
        <FlipCard
          href="https://zelus-sgp.vercel.app/"
          src={zelusImg} 
          nome="ZELUS - SGP"
          Descricao="Plataforma SaaS para hospitais que elimina prejuízos com equipamentos. Possui Dashboard Financeiro, Controle de Manutenções e Segurança avançada de dados (RLS). • Stack: React, Supabase, TypeScript. • Demo: admin@zelus.demo / 123456"
        />
      </div>

      {/* --- DEMAIS PROJETOS --- */}
      <h2 className={styles.section_title}><span>OUTROS PROJETOS</span></h2>
      
      <section className={styles.home_products}>
        <FlipCard
          href="https://github.com/mateusp-rezende/gestor-pedidos-microservicos"
          src={gestordepedidos} 
          nome="ALFRED GERENCIADOR"
          Descricao="API para gestão de produtos, clientes e pedidos em arquitetura de microsserviços •  Eureka • API Gateway •  OpenFeign • Tech Stack: Spring Cloud, Spring Boot , JPA, MySQL "
        />
  
         <FlipCard
          href="https://microlaser.vercel.app/"
          src={microlaser}
          nome="MICROLASER"
          Descricao="Plataforma web com: • Menu de Serviços/Produtos • Agendamento • Integração com APIs (CEP, WhatsApp) • Tech Stack: Jquery, Bootstrap 5, HTML5 semântico"
        />
        
        <FlipCard
          href="https://github.com/mateusp-rezende/GerenciadorDeVagas"
          src={gerenciadordevagas}
           nome="API GESTÃO DE VAGAS"
         Descricao="API de cadastro e gerenciamento de empresas e vagas de emprego • Validação e tratamento de erros • Relacionamento entre entidades • Segurança com autenticação JWT • Tech Stack: Spring Boot (Java 17), JPA, Spring Security, REST API"
        />

        <FlipCard
          href="https://github.com/mateusp-rezende/Caixa2Bank-projeto"
          src={c2b}
          nome="CAIXA 2 BANK"
          Descricao="Sistema bancário didático com: • Painel administrativo • Transações financeiras • Histórico operacional • Tech Stack: Spring Boot (Java 11), MVC Pattern, REST API, Fetch API"
        />

        <FlipCard
          href="https://mateus-projetos.vercel.app/"
          src={logo}
          nome="PORTFÓLIO"
          Descricao="Single Page Application construída com: • React 18 • Vite • CSS Modules • Framer Motion (animações). Exibe meus projetos com carregamento otimizado, dark/light mode e design system consistente, demonstrando boas práticas de desenvolvimento frontend"
       />

        <FlipCard
          href="https://github.com/mateusp-rezende/biblioteca-em-C"
          src={simboloc}
          nome="BIBLIOTECA EM C"
          Descricao="Biblioteca em C puro implementando estruturas de dados e algoritmos avançados."
       />
      </section>
    </div>
  );
}

export default Home;
