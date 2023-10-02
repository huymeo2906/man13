import styles from "./Toggle.module.css";

const Toggle = () => {
  return (
    <div className={styles.toggle}>
      <div className={styles.unionWrapper}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.progressParent}>
          <img className={styles.progressIcon} alt="" src="/progress1.svg" />
          <div className={styles.toDo}>To-Do</div>
        </div>
        <div className={styles.progressParent}>
          <img className={styles.progressIcon} alt="" src="/progress2.svg" />
          <div className={styles.toDo}>In Progress</div>
        </div>
        <div className={styles.progressParent}>
          <img className={styles.progressIcon2} alt="" src="/progress3.svg" />
          <div className={styles.toDo}>Review</div>
        </div>
        <div className={styles.progressParent}>
          <img className={styles.progressIcon2} alt="" src="/progress4.svg" />
          <div className={styles.toDo}>Completed</div>
        </div>
      </div>
      <div className={styles.toggleChild} />
      <div className={styles.uplusParent}>
        <img className={styles.progressIcon} alt="" src="/uplus4.svg" />
        <div className={styles.toDo}>Add new status</div>
      </div>
    </div>
  );
};

export default Toggle;
