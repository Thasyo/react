import styles from "./CarsDetails.module.css"

const CarsDetails = ({brand, color, year}) => {

  return (
   
    <>
        <div>
            <h2 className={styles.brand}>Nome: {brand}</h2>
            <h2 className={styles.color}>Cor: {color}</h2>
            <h2 className={styles.year}>Ano: {year}</h2>
        </div>
    </>
  
  )

}

export default CarsDetails