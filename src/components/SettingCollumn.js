import styles from "./SettingCollumn.module.css";

const SettingCollumn = () => {
  return (
    <div className={styles.settingCollumn}>
      <div className={styles.dueDateWrapper}>
        <div className={styles.dueDate}>Chọn cột hiển thị</div>
      </div>
      <div className={styles.componentParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Tên công việc</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Mức độ ưu tiên</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector4.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector5.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Người xử lý</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector6.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector7.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Ngày giao việc</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner2}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector8.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Ngày hết hạn</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector10.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Trạng thái</div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.switchInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.frameParent5}>
            <div className={styles.dueDateWrapper}>
              <div className={styles.settingsEthernet1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector12.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector13.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
              <div className={styles.dueDateWrapper}>
                <div className={styles.dueDate1}>Thêm cột</div>
              </div>
            </div>
            <img className={styles.uplusIcon} alt="" src="/uplus5.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCollumn;
