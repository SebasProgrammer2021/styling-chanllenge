import styles from './styles/FirmFacts.module.scss';
import FirmFactCard from './FirmFactCard';

const FirmFacts = () => {
  return (
    <div className={styles.firmFacts}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Firm Facts</h1>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.column}>
          <FirmFactCard variant="mainCard" buttonText="This is a two line button that terminates with..." icon />
        </div>
        <div className={styles.columnsGroup}>
          <FirmFactCard variant="green" buttonText='This is a two line button that terminates with...' icon />
          <FirmFactCard variant="initial" buttonText='This is a two line button that terminates with...' state='initial' icon />
          <FirmFactCard variant="initial" buttonText='This is a one line button' />
          <FirmFactCard variant="initial" buttonText='This is a two line button that terminates with...' state='disabled' icon />
          <FirmFactCard variant="initial" buttonText='This is a two line button that terminates with...' icon />
          <FirmFactCard variant="initial" buttonText='This is a two line button that terminates with...' state='hover' icon />
        </div>
      </div>
    </div>
  );
};

export default FirmFacts;