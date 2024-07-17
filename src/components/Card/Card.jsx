import React from "react";
import styles from "./Card.module.css";

export default function Card({ id, titulo, categoria, imagen, descripcion, link, color}) {
    console.log(link)
  return (
    <div className={styles.container} style={{borderColor:{color}}}>
      <section>
        <a href={link}>
        <img src={imagen} alt={descripcion} className={styles.img}/>
        </a>
      </section>
      <section className={styles.buttons}>
          <span className={styles.text}>Borrar</span>
          <span className={styles.text}>Editar</span>
      </section>
    </div>
  );
}
