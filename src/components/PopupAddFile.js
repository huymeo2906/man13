import styles from "./PopupAddFile.module.css";

const PopupAddFile = () => {
  return (
    <div className={styles.popupaddFile}>
      <div className={styles.modalheader}>
        <div className={styles.label}>Upload tài liệu</div>
        <img className={styles.closeIcon} alt="" src="/close.svg" />
      </div>
      <div className={styles.popupaddFileInner}>
        <div className={styles.frameParent}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/group-10028.svg"
              />
              <div className={styles.koThFileContainer}>
                <span className={styles.koThFile}>
                  Kéo thả file của bạn hoặc
                </span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.chnTpTin}>chọn tệp tin</span>
              </div>
            </div>
          </div>
          <div className={styles.fileUploadingWrapper}>
            <div className={styles.fileUploading}>
              <img
                className={styles.iconfileexcel}
                alt=""
                src="/iconfileexcel.svg"
              />
              <div className={styles.frameGroup}>
                <div className={styles.loiVnBnParent}>
                  <div className={styles.loiVnBn}>
                    Danh_sach_thanh_vien_dot_2
                  </div>
                  <img className={styles.ucloseIcon} alt="" src="/uclose.svg" />
                </div>
                <div className={styles.groupContainer}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.rectangleWrapper}>
                      <div className={styles.frameChild} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modalfooter}>
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
            <div className={styles.text}>Cập nhật</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAddFile;
