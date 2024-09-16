import styles from "./Home.module.css";
import React from 'react';

import FlipCard from "../layout/FlipCard";
import microlaser from "../../images/microlaser.png";
import treino from "../../images/majin.png";

function Home() {
  return (
    <div className={styles.home_container}>
    
      
        <h1>Projetos</h1>
        <h2>Clique no card para ver a descrição de cada projeto</h2>
      

      <section className={styles.home_products}>
       
         <FlipCard
          href="https://microlaser.vercel.app/"
          src={microlaser}
          nome="MICROLASER"
          Descricao="O site Microlaser oferece serviços e produtos médico-hospitalares, sendo representante em Goiás há mais de 30 anos. Ele permite agendamentos técnicos e orçamentos online, além de oferecer contato via WhatsApp e redes sociais. Foi desenvolvido utilizando JavaScript, CSS, Bootstrap, HTML, e uma API de CEP para facilitar o preenchimento automático de endereços no processo de agendamento e solicitação de orçamentos, proporcionando uma experiência mais eficiente para o usuário."
        />
        
        <FlipCard
          href="https://to-do-treino.vercel.app/"
          src={treino}
          nome="EDITOR DE TREINO"
          Descricao="O site To-Do Treino permite aos usuários montar treinos personalizados para diferentes grupos musculares, como peito, costas, pernas ou treinos completos. Também oferece a opção de editar e imprimir os treinos personalizados conforme a preferência do usuário. O site foi desenvolvido utilizando JavaScript, CSS e HTML, proporcionando uma interface simples e prática para o planejamento e gestão de rotinas de treino."
        />
      </section>
    </div>
  );
}

export default Home;
