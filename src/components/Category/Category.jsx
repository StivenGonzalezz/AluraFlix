import React from "react";
import Titulo from "../Titulo/Titulo";
import Card from "../Card/Card";
import styles from "./Category.module.css";

export default function Category({ titulo, color }) {
  return (
    <div className={styles.main}>
      <Titulo>
        <h1>{titulo}</h1>
      </Titulo>
      <section className={styles.cards}>
        <Card
          id="1"
          titulo="Si la velada fuera buena"
          categoria="Front End"
          imagen="https://img.youtube.com/vi/JVLm_ojk8EM/maxresdefault.jpg"
          descripcion="un video de bana"
          link="https://youtu.be/JVLm_ojk8EM?si=W3M7_TWWJbKtFCd4"
          color={color}
        />
        <Card
          id="1"
          titulo="Si la velada fuera buena"
          categoria="Front End"
          imagen="https://img.youtube.com/vi/JVLm_ojk8EM/maxresdefault.jpg"
          descripcion="un video de bana"
          link="https://youtu.be/JVLm_ojk8EM?si=W3M7_TWWJbKtFCd4"
        />
        <Card
          id="1"
          titulo="Si la velada fuera buena"
          categoria="Front End"
          imagen="https://img.youtube.com/vi/JVLm_ojk8EM/maxresdefault.jpg"
          descripcion="un video de bana"
          link="https://youtu.be/JVLm_ojk8EM?si=W3M7_TWWJbKtFCd4"
        />
      </section>
    </div>
  );
}
