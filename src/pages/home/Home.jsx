import { motion } from 'framer-motion';
import styles from './home.module.css';
import FlipCard from "../../components/FlipCard";
import Terminal from "../../components/terminal";

import microlaser from "../../assets/microlaser.png";
import c2b from "../../assets/c2b.png";
import logo from "../../assets/logo.png";
import simboloc from "../../assets/simbolo-c.png";
import gerenciadordevagas from "../../assets/gestaoVagas.png";
import gestordepedidos from "../../assets/GestorPedidos.png";
import zelusImg from "../../assets/zelus.png"; 

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Home() {
  return (
    <div className={styles.home_container}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        
      </motion.div>
      
      {/* --- SESSÃO DE DESTAQUE --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className={styles.section_title_wrapper}
      >
         <h2 className={styles.section_title}><span>PROJETO DESTAQUE</span></h2>
      </motion.div>
      
      <motion.div 
        className={styles.destaque_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        
        {/* ESQUERDA: O FlipCard Interativo do ALFRED */}
        <motion.div variants={fadeInUp}>
          <FlipCard
              href="https://alfred.rznd.tec.b"
              src={gestordepedidos} 
              nome="ALFRED - ECOSSISTEMA"
              Descricao="Este projeto possui duas versões distintas. O link abaixo leva ao código fonte da versão Arquitetura de Microsserviços (Java/Spring), ideal para análise técnica.
              https://github.com/mateusp-rezende/gestor-pedidos-microservicos Se deseja ver o produto funcional utilizado por clientes reais (versão SaaS/Supabase), clique no botão roxo ">
            
            
              </FlipCard>
       
        </motion.div>

        {/* DIREITA: O Card Fixo com a Explicação Técnica e de Negócio */}
        <motion.div className={styles.story_card} variants={fadeInUp}>
            <h3>Sobre o Ecossistema Alfred</h3>
            <p>
                Este é meu projeto de maior orgulho, pois resolve um <strong>problema real de microempreendedores</strong>: a gestão eficiente de pedidos, clientes e relatórios financeiros.
            </p>
            <p>
                <strong>Evolução Arquitetural:</strong>
                <br />
                O projeto é um laboratório vivo de engenharia. Foi desenvolvido inicialmente como Monolito, refatorado para <strong>Microsserviços com Java 17 e Spring Cloud</strong> (focando em escalabilidade e resiliência) e possui uma versão produtiva em <strong>Serverless (Supabase)</strong> rodando com custo zero.
            </p>
            <p>
                <strong>Tech Stack (Versão Microservices):</strong> Spring Boot 3, Netflix Eureka, API Gateway, OpenFeign, MySQL e Docker.
                <br/>
                
            </p>
          <a href="https://github.com/mateusp-rezende/gestor-pedidos-microservicos" target="_blank"> Acesse a descrição detalhada no GitHub</a>
                
        </motion.div>

      </motion.div>

      {/* --- DEMAIS PROJETOS --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className={styles.section_title}><span>OUTROS PROJETOS</span></h2>
      </motion.div>
      
      <motion.section 
        className={styles.home_products}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        
        {/* ZELUS AGORA AQUI EMBAIXO */}
        <motion.div variants={fadeInUp}>
          <FlipCard
              href="https://zelus-sgp.vercel.app/"
              src={zelusImg} 
              nome="ZELUS - SGP"
              Descricao="SaaS B2B completo para Engenharia Clínica e Gestão Patrimonial Hospitalar.

💎 DIFERENCIAIS DE NEGÓCIO:
• Rastreamento Híbrido: Geração automática de QR Codes para ativos.
• Finanças: Cálculo de depreciação em tempo real e valuation do parque.
• Segurança Enterprise: Implementação de RLS (Row Level Security) e auditoria para compliance com LGPD.

🔐 CREDENCIAIS PARA DEMO:
User: admin@zelus.demo
Pass: 123456"
            />
        </motion.div>
  
        <motion.div variants={fadeInUp}>
             <FlipCard
              href="https://microlaser.vercel.app/"
              src={microlaser}
              nome="MICROLASER"
              Descricao="Plataforma web comercial com: • Menu de Serviços/Produtos • Agendamento • Integração com APIs (CEP, WhatsApp) • Tech Stack: Jquery, Bootstrap 5, HTML5 semântico"
            />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
            <FlipCard
              href="https://github.com/mateusp-rezende/GerenciadorDeVagas"
              src={gerenciadordevagas}
               nome="API GESTÃO DE VAGAS"
             Descricao="API de cadastro e gerenciamento de empresas e vagas de emprego • Validação e tratamento de erros • Relacionamento entre entidades • Segurança com autenticação JWT • Tech Stack: Spring Boot, JPA, Spring Security"
            />
        </motion.div>

        <motion.div variants={fadeInUp}>
            <FlipCard
              href="https://github.com/mateusp-rezende/Caixa2Bank-projeto"
              src={c2b}
              nome="CAIXA 2 BANK"
              Descricao="Sistema bancário didático com: • Painel administrativo • Transações financeiras • Histórico operacional • Tech Stack: Spring Boot (Java 11), MVC Pattern, REST API"
            />
        </motion.div>

        <motion.div variants={fadeInUp}>
            <FlipCard
              href="https://mateus-projetos.vercel.app/"
              src={logo}
              nome="PORTFÓLIO"
              Descricao="SPA construída com React 18, Vite e Framer Motion. Demonstra consumo de assets otimizados, design system consistente e boas práticas de componentização e animação."
           />
        </motion.div>

        <motion.div variants={fadeInUp}>
            <FlipCard
              href="https://github.com/mateusp-rezende/biblioteca-em-C"
              src={simboloc}
              nome="BIBLIOTECA EM C"
              Descricao="Implementação low-level de estruturas de dados: • Alocação dinâmica • Operações com matrizes • Otimização de memória • Algoritmos matemáticos complexos em C puro."
           />
       </motion.div>
      </motion.section>
    </div>
  );
}

export default Home;
