import styles from './styles/FirmFacts.module.scss';
import FirmFactCard from './FirmFactCard';

const FirmFacts = () => {
  return (
    <div className={styles.firmFacts}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Firm Facts</h1>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <FirmFactCard variant="mainCard" buttonText="This is a two line button that terminates with..." />
        </div>
        <div className={styles.columnsGroup}>
          <FirmFactCard variant="initial" />
          <FirmFactCard variant="initial" />
          <FirmFactCard variant="initial" />
          <FirmFactCard variant="initial" />
          <FirmFactCard variant="initial" />
        </div>
        {/* <FirmFactCard variant="default" />
        <FirmFactCard variant="default" /> */}
        {/* <Button variant="default">Learn More</Button>
        <Button variant="default">Learn More</Button> */}
      </div>
      {/* <div className={styles.row}>
        <FirmFactCard variant="border" />
        <FirmFactCard variant="border" />
        <FirmFactCard variant="border" />
        <Button variant="icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15ZM8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM7.5 10.5L6.5 9.5L8 8L6.5 6.5L7.5 5.5L9 8L7.5 10.5Z" fill="#007bff"/>
          </svg>
          Learn More
        </Button>
        <Button variant="icon" disabled>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15ZM8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM7.5 10.5L6.5 9.5L8 8L6.5 6.5L7.5 5.5L9 8L7.5 10.5Z" fill="#007bff"/>
          </svg>
          Learn More
        </Button>
      </div> */}
    </div>
  );
};

export default FirmFacts;