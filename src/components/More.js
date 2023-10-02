import styles from "./More.module.css";

const More = () => {
  return (
    <div className={styles.more}>
      <div className={styles.moreInner}>
        <img className={styles.frameChild} alt="" src="/polygon-3.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.instanceParent}>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img
                className={styles.usearchPlusIcon}
                alt=""
                src="/usearchplus.svg"
              />
              <div className={styles.zoomIn}>Zoom In</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img
                className={styles.usearchPlusIcon1}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.zoomIn}>Print</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img className={styles.usearchPlusIcon} alt="" src="/ucopy.svg" />
              <div className={styles.zoomIn}>Duplicate</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img
                className={styles.usearchPlusIcon1}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.zoomIn}>Make a subtask of...</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img
                className={styles.usearchPlusIcon1}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.zoomIn}>{`Transfer to... `}</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img
                className={styles.usearchPlusIcon1}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.zoomIn}>{`Merge to... `}</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img className={styles.usearchPlusIcon} alt="" src="/ulink.svg" />
              <div className={styles.zoomIn}>{`Copy link `}</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img
                className={styles.usearchPlusIcon1}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.zoomIn}>{`Peekaboo this task `}</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.usearchPlusParent}>
              <img
                className={styles.usearchPlusIcon}
                alt=""
                src="/utrash1.svg"
              />
              <div className={styles.zoomIn}>Delete</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
              <div className={styles.ctrlWrapper}>
                <div className={styles.ctrl}>Ctrl</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
