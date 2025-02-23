import styles from './styles/FirmFacts.module.scss';
import FirmFactCard from './FirmFactCard';
import closeIcon from './assets/Close-icon-btn.svg';
interface FirmFact {
  id: number;
  variant: "default" | "border";
  icon?: boolean;
  className?: string;
  large?: boolean;
  stateText: string;
  disabled?: boolean;
  buttonContent: string;
}

const factsData: FirmFact[] = [
  {
    id: 1,
    variant: "default",
    className: styles.div1,
    large: true,
    icon: true,
    stateText: "State",
    buttonContent: "This is a two line button that terminates with",
  },
  {
    id: 2,
    variant: "default",
    className: styles.div2,
    stateText: "State",
    icon: true,
    buttonContent: "This is a two line button that terminates with",
  },
  {
    id: 3,
    variant: "default",
    className: styles.div3,
    stateText: "State",
    buttonContent: "This is a one line button",
  },
  {
    id: 4,
    variant: "default",
    className: styles.div4,
    icon: true,
    stateText: "State",
    buttonContent: "This is a two line button that terminates with",
  },
  {
    id: 5,
    variant: "border",
    className: styles.div5,
    icon: true,
    stateText: "State",
    buttonContent: "This is a two line button that terminates with",
  },
  {
    id: 6,
    variant: "border",
    disabled: true,
    className: styles.div6,
    icon: true,
    stateText: "State",
    buttonContent: "This is a two line button that terminates with",
  },
  {
    id: 7,
    variant: "border",
    className: styles.div7,
    icon: true,
    stateText: "State",
    buttonContent: "This is a two line button that terminates with",
  },
];

const FirmFacts = () => {

  return (
    <div className={styles.firmFactsContainer}>
      <div className={styles.closeIconContainer}>
        <button className={styles.closeIconButton}>
          <img src={closeIcon} alt="close icon" width={44} height={44} />
        </button>
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Firm Facts</h2>
      </div>
      {/* <hr className={styles.divider} /> */}
      <div className={styles.cardsLayout}>
        {factsData.map((fact: FirmFact) => (
          <FirmFactCard
            key={fact.id}
            variant={fact.variant as "default" | "border"}
            icon={fact.icon || false}
            large={fact.large || false}
            className={fact.className}
            disabled={fact.disabled || false}
            stateText={fact.stateText}
            buttonContent={fact.buttonContent}
          />
        ))}
      </div>
    </div>
  );
};

export default FirmFacts;