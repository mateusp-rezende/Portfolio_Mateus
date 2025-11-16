import styles from './home.module.css';
import FlipCard from "../../components/FlipCard";
import Terminal from "../../components/terminal";

// Seus imports
import microlaser from "../../assets/microlaser.png";
import c2b from "../../assets/c2b.png";
import logo from "../../assets/logo.png";
import simboloc from "../../assets/simbolo-c.png";
import gerenciadordevagas from "../../assets/gestaoVagas.png";
import gestordepedidos from "../../assets/GestorPedidos.png";
// Importe a imagem do Zelus que você tirou o print
import zelusImg from "../../assets/zelus.png"; 

function Home() {
  return (
    <div className={styles.home_container}>
      <Terminal/>
      
      {/* Título da Seção */}
      <h2 className={styles.section_title}><span>PROJETO DESTAQUE</span></h2>
      
      <div className={styles.destaque_container}>
        
        {/* ESQUERDA: O FlipCard Interativo */}
        <FlipCard
          href="https://zelus-sgp.vercel.app/"
          src={zelusImg} 
          nome="ZELUS - SGP"
          Descricao="Plataforma SaaS para gestão hospitalar. Dashboard em tempo real, controle de manutenção e segurança RLS. • Demo: admin@zelus.demo / 123456"
        />

        {/* DIREITA: O Card Fixo com a História */}
       <div className={styles.story_card}>
            <h3>Sobre o Sistema</h3>
            <p>
                O <strong>Zelus</strong> é uma solução SaaS projetada para resolver a gestão ineficiente de ativos em ambientes hospitalares, focando na prevenção de perdas e controle de custos.
            </p>
            <p>
                <strong>Funcionalidades Chave:</strong>
                <br />
                • Dashboard financeiro em tempo real.
                <br />
                • Rastreamento completo de manutenções.
                <br />
                • Controle de acesso granular (RBAC).
            </p>
            <p>
                <strong>Tecnologias:</strong> Construído com a robustez do <strong>React</strong> e <strong>TypeScript</strong> no frontend, e a segurança do <strong>PostgreSQL (Supabase)</strong> com RLS no backend.
            </p>
        </div>

      </div>

      {/* Título dos Outros Projetos */}
      <h2 className={styles.section_title}><span>OUTROS PROJETOS</span></h2>
      
      <section className={styles.home_products}>
        <FlipCard
          href="https://github.com/mateusp-rezende/gestor-pedidos-microservicos"
          src={gestordepedidos} 
          nome="ALFRED GERENCIADOR"
          Descricao="API para gestão de produtos e pedidos em arquitetura de microsserviços."
        />
        {/* ... seus outros FlipCards continuam aqui ... */}
         <FlipCard
          href="https://microlaser.vercel.app/"
          src={microlaser}
          nome="MICROLASER"
          Descricao="Plataforma web com agendamento e integração com APIs."
        />
         <FlipCard
          href="https://github.com/mateusp-rezende/GerenciadorDeVagas"
          src={gerenciadordevagas}
           nome="API GESTÃO DE VAGAS"
         Descricao="API de cadastro e gerenciamento de vagas com Spring Security."
        />
        <FlipCard
          href="https://github.com/mateusp-rezende/Caixa2Bank-projeto"
          src={c2b}
          nome="CAIXA 2 BANK"
          Descricao="Sistema bancário didático com painel administrativo."
        />
        <FlipCard
          href="https://mateus-projetos.vercel.app/"
          src={logo}
          nome="PORTFÓLIO"
          Descricao="SPA construída com React, Vite e CSS Modules."
       />
        <FlipCard
          href="https://github.com/mateusp-rezende/biblioteca-em-C"
          src={simboloc}
          nome="BIBLIOTECA EM C"
          Descricao="Biblioteca em C puro com estruturas de dados avançadas."
       />
      </section>
    </div>
  );
}

export default Home;
