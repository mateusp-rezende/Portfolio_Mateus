import styles from './home.module.css';
import FlipCard from "../../components/FlipCard";
import Terminal from "../../components/terminal";
import microlaser from "../../assets/microlaser.png";
import c2b from "../../assets/c2b.png";
import logo from "../../assets/logo.png";
import simboloc from "../../assets/simbolo-c.png";

function Home() {
  return (
    
    <div className={styles.home_container}>
    
    <Terminal/>
      <section className={styles.home_products}>
  
         <FlipCard
          href="https://microlaser.vercel.app/"
          src={microlaser}
          nome="MICROLASER"
          Descricao="O site Microlaser oferece serviços e produtos médico-hospitalares, sendo representante em Goiás há mais de 30 anos. Ele permite agendamentos técnicos e orçamentos online, além de oferecer contato via WhatsApp e redes sociais. Foi desenvolvido utilizando JavaScript, CSS, Bootstrap, HTML, e uma API de CEP para facilitar o preenchimento automático de endereços no processo de agendamento e solicitação de orçamentos, proporcionando uma experiência mais eficiente para o usuário."
        />
        
        <FlipCard
          href="https://github.com/mateusp-rezende/Caixa2Bank-projeto"
          src={c2b}
          nome="Caixa 2 bank"
          Descricao="O projeto é um sistema CRUD que simula um banco, permitindo enviar e receber dinheiro, além de gerenciar usuários. Foi desenvolvido com Java Spring, HTML, CSS e JavaScript, aplicando conceitos de POO, engenharia de requisitos e design UX/UI para oferecer uma experiência funcional e interativa."
        />

        <FlipCard
          href="https://mateus-projetos.vercel.app/"
          src={logo}
          nome="PORTFOLIO"
          Descricao="site desenvolvido em React com o objetivo de organizar e exibir os projetos que desenvolvi como programador. Nele, você encontrará uma seleção dos meus trabalhos, desde aplicativos web até projetos pessoais"
       />

        <FlipCard
          href="https://github.com/mateusp-rezende/biblioteca-em-C"
          src={simboloc}
          nome="BIBLIOTECA-C"
          Descricao="Essa atividade foi desenvolvida com o propósito de aprofundar meus conhecimentos em C, explorando o uso de ponteiros e a criação de funções. Ela oferece uma variedade de funcionalidades, desde cálculos matemáticos até verificações de palíndromos e manipulação de vetores e matrizes."
       />
        
      </section>
    </div>
  );
}

export default Home;
