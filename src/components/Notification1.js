import styles from "./Notification1.module.css";

const Notification1 = () => {
  return (
    <div className={styles.notification}>
      <img className={styles.ucloseIcon} alt="" src="/uclose1.svg" />
      <div className={styles.frameParent}>
        <div className={styles.iconnotiwarningParent}>
          <img
            className={styles.iconnotiwarning}
            alt=""
            src="/iconnotiwarning.svg"
          />
          <div className={styles.emailTittleParent}>
            <div className={styles.emailTittle}>
              Bạn có chắc chắn muốn xóa file này?
            </div>
            <div className={styles.massage}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing nulla.
            </div>
          </div>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/oval-copy-3.svg"
            />
            <div className={styles.text}>Hủy bỏ</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.text}>Xóa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification1;
