import styles from './CarsDetails.module.css';

const CarsDetails = ({brand, km, color}) => {
  return (
    <div>
        <ul className={styles.my_list}>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  );
};

export default CarsDetails;