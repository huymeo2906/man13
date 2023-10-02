import { useState, useCallback } from "react";
import Chat from "./Chat";
import PortalPopup from "./PortalPopup";
import More from "./More";
import Toggle from "./Toggle";
import FrameInstance from "./FrameInstance";
import Notification1 from "./Notification1";
import PopupAddFile from "./PopupAddFile";
import styles from "./ChiTitCngVicDefault.module.css";

const ChiTitCngVicDefault = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false);
  const [isToggleOpen, setToggleOpen] = useState(false);
  const [isFrameInstanceOpen, setFrameInstanceOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isNotification1Open, setNotification1Open] = useState(false);
  const [isPopupAddFileOpen, setPopupAddFileOpen] = useState(false);
  const [isChiTitCngVicDefault1Open, setChiTitCngVicDefault1Open] =
    useState(false);
  const [isChiTitCngVicDefault2Open, setChiTitCngVicDefault2Open] =
    useState(false);
  const [isChiTitCngVicDefault3Open, setChiTitCngVicDefault3Open] =
    useState(false);

  const openChat = useCallback(() => {
    setChatOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setChatOpen(false);
  }, []);

  const openMore = useCallback(() => {
    setMoreOpen(true);
  }, []);

  const closeMore = useCallback(() => {
    setMoreOpen(false);
  }, []);

  const openToggle = useCallback(() => {
    setToggleOpen(true);
  }, []);

  const closeToggle = useCallback(() => {
    setToggleOpen(false);
  }, []);

  const openFrameInstance = useCallback(() => {
    setFrameInstanceOpen(true);
  }, []);

  const closeFrameInstance = useCallback(() => {
    setFrameInstanceOpen(false);
  }, []);

  const openNotification = useCallback(() => {
    setNotificationOpen(true);
  }, []);

  const closeNotification = useCallback(() => {
    setNotificationOpen(false);
  }, []);

  const openNotification1 = useCallback(() => {
    setNotification1Open(true);
  }, []);

  const closeNotification1 = useCallback(() => {
    setNotification1Open(false);
  }, []);

  const openPopupAddFile = useCallback(() => {
    setPopupAddFileOpen(true);
  }, []);

  const closePopupAddFile = useCallback(() => {
    setPopupAddFileOpen(false);
  }, []);

  const openChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(true);
  }, []);

  const closeChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(false);
  }, []);

  const openChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(true);
  }, []);

  const closeChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(false);
  }, []);

  const openChiTitCngVicDefault3 = useCallback(() => {
    setChiTitCngVicDefault3Open(true);
  }, []);

  const closeChiTitCngVicDefault3 = useCallback(() => {
    setChiTitCngVicDefault3Open(false);
  }, []);

  return (
    <>
      <div className={styles.chiTitCngVicDefault}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.uleftArrowToLeftParent}>
              <img
                className={styles.uleftArrowToLeftIcon}
                alt=""
                src="/uleftarrowtoleft.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.tag}>
                      <div className={styles.daysLeft}>Agile</div>
                      <div className={styles.ucodeBranchParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/ucodebranch.svg"
                        />
                        <div className={styles.marketing}>Xem quy trình</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.ulinkAltWrapper}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/ulinkalt.svg"
                    />
                  </div>
                  <div className={styles.ulinkAltWrapper}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/usharealt.svg"
                    />
                  </div>
                  <div className={styles.frameParent1} onClick={openChat}>
                    <div className={styles.ucommentDotsWrapper}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/ucommentdots1.svg"
                      />
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>2</div>
                    </div>
                  </div>
                  <div className={styles.unotifiacationWrapper}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/unotifiacation1.svg"
                    />
                  </div>
                  <div className={styles.uellipsisHWrapper} onClick={openMore}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/uellipsish.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3} onClick={openToggle}>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/progress.svg"
                  />
                </div>
                <img className={styles.downIcon} alt="" src="/down2.svg" />
              </div>
              <div className={styles.tasknameParent}>
                <div
                  className={styles.taskname}
                >{`Thiết kế giao diện Dashboard & Todo-list`}</div>
                <div className={styles.taskname1}>Thiết kế UI/UX</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Người giao việc</div>
                    <div className={styles.info}>
                      <div className={styles.userParent}>
                        <div className={styles.user}>
                          <div className={styles.avt}>
                            <div className={styles.userpic} />
                            <div className={styles.state} />
                            <div className={styles.label}>NH</div>
                          </div>
                          <div className={styles.nguynHongNam}>
                            Nguyễn Hoàng Nam
                          </div>
                        </div>
                        <div className={styles.textParent}>
                          <div className={styles.text}>20/02/2022</div>
                          <div className={styles.tag1}>
                            <img
                              className={styles.progressIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                            <div className={styles.text}>Còn lại 7 ngày</div>
                          </div>
                        </div>
                        <div className={styles.tag2}>
                          <div className={styles.text}>Đang xử lý</div>
                        </div>
                        <div className={styles.estimate}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Đánh giá lại (nếu có)
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.priorityIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Người thực hiện</div>
                    <div className={styles.info}>
                      <div className={styles.userParent}>
                        <div className={styles.user}>
                          <div className={styles.avt}>
                            <div className={styles.userpic1} />
                            <div className={styles.state} />
                            <div className={styles.label1}>MT</div>
                          </div>
                          <div className={styles.nguynHongNam}>
                            Hoàng Minh Tú
                          </div>
                        </div>
                        <div className={styles.textParent}>
                          <div className={styles.text}>20/02/2022</div>
                          <div className={styles.tag1}>
                            <img
                              className={styles.progressIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                            <div className={styles.text}>Còn lại 7 ngày</div>
                          </div>
                        </div>
                        <div className={styles.tag2}>
                          <div className={styles.text}>Đang xử lý</div>
                        </div>
                        <div className={styles.estimate}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Đánh giá lại (nếu có)
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.priorityIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Người theo dõi</div>
                    <div className={styles.avtParent}>
                      <div className={styles.avt2}>
                        <div className={styles.uuserPlusWrapper}>
                          <img
                            className={styles.uuserPlusIcon}
                            alt=""
                            src="/uuserplus.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.group}>
                        <div className={styles.avtGroup}>
                          <div className={styles.avt3}>
                            <div className={styles.userpic} />
                            <div className={styles.state2} />
                            <div className={styles.label}>NH</div>
                          </div>
                          <div className={styles.avt4}>
                            <div className={styles.userpic3} />
                            <div className={styles.state2} />
                            <div className={styles.label1}>MN</div>
                          </div>
                          <div className={styles.avt5}>
                            <div className={styles.userpic1} />
                            <div className={styles.state2} />
                            <div className={styles.label}>HT</div>
                          </div>
                          <div className={styles.avt6}>
                            <img
                              className={styles.ovalCopy3}
                              alt=""
                              src="/oval-copy-31.svg"
                            />
                            <div className={styles.container}>
                              <div className={styles.div}>+3</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Hạn cuối</div>
                    <div className={styles.info}>
                      <div className={styles.userParent}>
                        <div className={styles.user2}>
                          <div className={styles.avt}>
                            <div className={styles.userpic} />
                            <div className={styles.state} />
                            <div className={styles.label}>NH</div>
                          </div>
                          <div className={styles.nguynHongNam}>
                            Nguyễn Hoàng Nam
                          </div>
                        </div>
                        <div className={styles.textContainer}>
                          <div
                            className={styles.text2}
                            onClick={openFrameInstance}
                          >
                            20/02/2022
                          </div>
                          <div className={styles.tag1}>
                            <img
                              className={styles.progressIcon}
                              alt=""
                              src="/uclock.svg"
                            />
                            <div className={styles.text}>Còn lại 7 ngày</div>
                          </div>
                        </div>
                        <div className={styles.tag2}>
                          <div className={styles.text}>Đang xử lý</div>
                        </div>
                        <div className={styles.estimate}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Đánh giá lại (nếu có)
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.priorityIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Nguồn lực</div>
                    <div className={styles.ngunLc1}>
                      <div className={styles.info3}>
                        <div className={styles.userParent}>
                          <div className={styles.user2}>
                            <div className={styles.avt}>
                              <div className={styles.userpic} />
                              <div className={styles.state} />
                              <div className={styles.label}>NH</div>
                            </div>
                            <div className={styles.nguynHongNam}>
                              Nguyễn Hoàng Nam
                            </div>
                          </div>
                          <div className={styles.textContainer}>
                            <div className={styles.text}>16 giờ</div>
                            <div className={styles.tag7}>
                              <img
                                className={styles.progressIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.text}>Còn lại 7 ngày</div>
                            </div>
                          </div>
                          <div className={styles.tag2}>
                            <div className={styles.text}>Đang xử lý</div>
                          </div>
                          <div className={styles.estimate}>
                            <img
                              className={styles.progressIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                            <div className={styles.text}>
                              Đánh giá lại (nếu có)
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Khẩn cấp</div>
                    <div className={styles.switchWrapper}>
                      <div className={styles.switch}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.groupChild} />
                          <div className={styles.groupItem} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Trạng thái</div>
                    <div className={styles.info}>
                      <div className={styles.userParent}>
                        <div className={styles.user2}>
                          <div className={styles.avt}>
                            <div className={styles.userpic} />
                            <div className={styles.state} />
                            <div className={styles.label}>NH</div>
                          </div>
                          <div className={styles.nguynHongNam}>
                            Nguyễn Hoàng Nam
                          </div>
                        </div>
                        <div className={styles.textParent}>
                          <div className={styles.text}>20/02/2022</div>
                          <div className={styles.tag1}>
                            <img
                              className={styles.progressIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                            <div className={styles.text}>Còn lại 7 ngày</div>
                          </div>
                        </div>
                        <div className={styles.tag10}>
                          <div className={styles.text}>Đang xử lý</div>
                        </div>
                        <div className={styles.estimate}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Đánh giá lại (nếu có)
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.priorityIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Tiến độ</div>
                    <div className={styles.info5}>
                      <div className={styles.input}>
                        <div className={styles.usearchParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.searchParent}>
                            <div className={styles.text}>80%</div>
                            <div className={styles.frameChild} />
                          </div>
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Sprint</div>
                    <div className={styles.info}>
                      <div className={styles.userParent}>
                        <div className={styles.user2}>
                          <div className={styles.avt}>
                            <div className={styles.userpic} />
                            <div className={styles.state} />
                            <div className={styles.label}>NH</div>
                          </div>
                          <div className={styles.nguynHongNam}>
                            Nguyễn Hoàng Nam
                          </div>
                        </div>
                        <div className={styles.textContainer}>
                          <div className={styles.text}>Sprint 1</div>
                          <div className={styles.tag7}>
                            <img
                              className={styles.progressIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                            <div className={styles.text}>Còn lại 7 ngày</div>
                          </div>
                        </div>
                        <div className={styles.tag2}>
                          <div className={styles.text}>Đang xử lý</div>
                        </div>
                        <div className={styles.estimate}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Đánh giá lại (nếu có)
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.priorityIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.uplusParent}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/uplus2.svg"
                  />
                  <div className={styles.daysLeft}>Thêm thuộc tính</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon7} alt="" src="/down.svg" />
                  </div>
                  <div className={styles.mT}>Mô tả</div>
                </div>
                <div className={styles.ueditAltWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/ueditalt.svg"
                  />
                </div>
              </div>
              <div className={styles.onceYouGetTheHangOfThingWrapper}>
                <div className={styles.onceYouGet}>
                  Once you get the hang of things, using your keyboard to
                  navigate and manage tasks let you work much faster. That's why
                  every feature in Height is available from your keyboard 🏎.
                </div>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent9}>
                  <div className={styles.downContainer}>
                    <img className={styles.downIcon7} alt="" src="/down3.svg" />
                  </div>
                  <div className={styles.mT}>Tài liệu</div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameParent12}>
                  <div className={styles.groupParent}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangle} />
                      <div className={styles.sKHiu}>Ký số</div>
                      <div className={styles.sKHiu1}>Tùy chọn</div>
                      <div className={styles.trchYu}>Tên file</div>
                    </div>
                    <div className={styles.groupDiv}>
                      <div className={styles.frameParent13}>
                        <div className={styles.iconfilewordParent}>
                          <img
                            className={styles.downIcon}
                            alt=""
                            src="/iconfileword.svg"
                          />
                          <div className={styles.fileHngDnSDParent}>
                            <div className={styles.text}>
                              File hướng dẫn sử dụng phần mềm
                            </div>
                            <div className={styles.tTrnh}>7MB</div>
                          </div>
                        </div>
                        <div className={styles.downIcon}>
                          <div className={styles.checkBoxChild} />
                        </div>
                      </div>
                      <div className={styles.action}>
                        <div className={styles.iconAction}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/ueye.svg"
                          />
                        </div>
                        <div className={styles.iconAction}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/ufiledownload.svg"
                          />
                        </div>
                        <div
                          className={styles.iconAction2}
                          onClick={openNotification}
                        >
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/utrash.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent14}>
                      <div className={styles.frameParent13}>
                        <div className={styles.iconfilewordParent}>
                          <img
                            className={styles.downIcon}
                            alt=""
                            src="/iconfilepdf.svg"
                          />
                          <div className={styles.fileHngDnSDParent}>
                            <div className={styles.text}>
                              File hướng dẫn sử dụng phần mềm
                            </div>
                            <div className={styles.tTrnh}>7MB</div>
                          </div>
                        </div>
                        <div className={styles.downIcon}>
                          <div className={styles.checkBoxChild} />
                        </div>
                      </div>
                      <div className={styles.action}>
                        <div className={styles.iconAction}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/ueye.svg"
                          />
                        </div>
                        <div className={styles.iconAction}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/ufiledownload.svg"
                          />
                        </div>
                        <div
                          className={styles.iconAction2}
                          onClick={openNotification1}
                        >
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/utrash.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <div className={styles.button} onClick={openPopupAddFile}>
                      <img
                        className={styles.ucodeBranchIcon}
                        alt=""
                        src="/uplus3.svg"
                      />
                      <div className={styles.marketing}>Thêm văn bản</div>
                      <img
                        className={styles.fillArrowIosRight}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.frameParent16}>
                      <div className={styles.frame}>
                        <div className={styles.marketing}>1</div>
                      </div>
                      <div className={styles.wrapper1}>
                        <div className={styles.marketing}>2</div>
                      </div>
                      <div className={styles.wrapper1}>
                        <div className={styles.marketing}>3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon7} alt="" src="/down.svg" />
                  </div>
                  <div className={styles.mT}>File đính kèm</div>
                </div>
                <div className={styles.ueditAltWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/upaperclip.svg"
                  />
                </div>
              </div>
              <div className={styles.unsplashtk9mHp4rgqParent}>
                <div className={styles.unsplashtk9mHp4rgq}>
                  <div className={styles.ucloseWrapper}>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                  <div className={styles.label10}>File_name.jpg</div>
                </div>
                <div className={styles.unsplashgvptkmonylk}>
                  <div className={styles.ucloseWrapper}>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                  <div className={styles.label10}>File_name.jpg</div>
                </div>
                <div className={styles.unsplashzwd435Ewb4}>
                  <div className={styles.ucloseWrapper}>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                  <div className={styles.label10}>File_name.jpg</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon7} alt="" src="/down1.svg" />
                  </div>
                  <div className={styles.mT}>Subtasks</div>
                </div>
                <div className={styles.uplusWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.subtasks1}>
                <div className={styles.work}>
                  <div
                    className={styles.listItem}
                    onClick={openChiTitCngVicDefault1}
                  >
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.taskTitle}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.progressParent}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/progress.svg"
                          />
                          <img
                            className={styles.downVectorIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Lập trình hiệu ứng cho website
                          </div>
                        </div>
                      </div>
                      <div className={styles.tasknameGroup}>
                        <div className={styles.frameParent9}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/ucommentdots2.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                        <div className={styles.taskname6}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.assignees}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic9} />
                        <div className={styles.state9} />
                        <div className={styles.label13}>KA</div>
                      </div>
                      <div className={styles.tngAnh}>Tùng Anh</div>
                    </div>
                    <img
                      className={styles.priorityIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.dueDate6}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>20/02/2022</div>
                    </div>
                    <div className={styles.tag13}>
                      <div className={styles.marketing}>Mới được giao</div>
                    </div>
                    <div className={styles.works}>
                      <img
                        className={styles.ucodeBranchIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>3</div>
                    </div>
                    <div className={styles.projectState}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> đang xử lý</span>
                        </div>
                      </div>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> quá hạn</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.action2}>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.celldepartment}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.marketing}>Marketing</div>
                    </div>
                  </div>
                  <div className={styles.priorityParent}>
                    <img
                      className={styles.priorityIcon1}
                      alt=""
                      src="/priority.svg"
                    />
                    <div className={styles.priorityIcon1}>
                      <div className={styles.userpic10} />
                      <div className={styles.state10} />
                      <div className={styles.label14}>NH</div>
                    </div>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/ucalendaralt1.svg"
                    />
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/uusersalt1.svg"
                    />
                  </div>
                  <div className={styles.listItem1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.taskTitle1}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.progressParent}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.downVectorIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.taskname11}>
                            Thiết kế giao diện Dashboard và Todo list
                          </div>
                        </div>
                      </div>
                      <div className={styles.tasknameGroup}>
                        <div className={styles.frameParent9}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                        <div className={styles.taskname6}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.assignees}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic9} />
                        <div className={styles.state9} />
                        <div className={styles.label13}>KA</div>
                      </div>
                      <div className={styles.tngAnh}>Tùng Anh</div>
                    </div>
                    <img
                      className={styles.priorityIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.dueDate6}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>20/02/2022</div>
                    </div>
                    <div className={styles.tag14}>
                      <div className={styles.marketing}>Hoàn thành</div>
                    </div>
                    <div className={styles.works}>
                      <img
                        className={styles.ucodeBranchIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>3</div>
                    </div>
                    <div className={styles.projectState}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> đang xử lý</span>
                        </div>
                      </div>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> quá hạn</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.action2}>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.celldepartment}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.marketing}>Marketing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.work}>
                  <div
                    className={styles.listItem}
                    onClick={openChiTitCngVicDefault2}
                  >
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.taskTitle}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.progressParent}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/progress.svg"
                          />
                          <img
                            className={styles.downVectorIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Lập trình hiệu ứng cho website
                          </div>
                        </div>
                      </div>
                      <div className={styles.tasknameGroup}>
                        <div className={styles.frameParent9}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/ucommentdots2.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                        <div className={styles.taskname6}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.assignees}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic9} />
                        <div className={styles.state9} />
                        <div className={styles.label13}>KA</div>
                      </div>
                      <div className={styles.tngAnh}>Tùng Anh</div>
                    </div>
                    <img
                      className={styles.priorityIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.dueDate6}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>20/02/2022</div>
                    </div>
                    <div className={styles.tag13}>
                      <div className={styles.marketing}>Mới được giao</div>
                    </div>
                    <div className={styles.works}>
                      <img
                        className={styles.ucodeBranchIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>3</div>
                    </div>
                    <div className={styles.projectState}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> đang xử lý</span>
                        </div>
                      </div>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> quá hạn</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.action2}>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.celldepartment}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.marketing}>Marketing</div>
                    </div>
                  </div>
                  <div className={styles.priorityParent}>
                    <img
                      className={styles.priorityIcon1}
                      alt=""
                      src="/priority1.svg"
                    />
                    <div className={styles.priorityIcon1}>
                      <div className={styles.userpic13} />
                      <div className={styles.state10} />
                      <div className={styles.label14}>KK</div>
                    </div>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/ucalendaralt2.svg"
                    />
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/uusersalt1.svg"
                    />
                  </div>
                  <div className={styles.listItem1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.taskTitle1}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.progressParent}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.downVectorIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.taskname11}>
                            Thiết kế giao diện Dashboard và Todo list
                          </div>
                        </div>
                      </div>
                      <div className={styles.tasknameGroup}>
                        <div className={styles.frameParent9}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                        <div className={styles.taskname6}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.assignees}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic9} />
                        <div className={styles.state9} />
                        <div className={styles.label13}>KA</div>
                      </div>
                      <div className={styles.tngAnh}>Tùng Anh</div>
                    </div>
                    <img
                      className={styles.priorityIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.dueDate6}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>20/02/2022</div>
                    </div>
                    <div className={styles.tag14}>
                      <div className={styles.marketing}>Hoàn thành</div>
                    </div>
                    <div className={styles.works}>
                      <img
                        className={styles.ucodeBranchIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>3</div>
                    </div>
                    <div className={styles.projectState}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> đang xử lý</span>
                        </div>
                      </div>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> quá hạn</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.action2}>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.celldepartment}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.marketing}>Marketing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.work2}>
                  <div
                    className={styles.listItem}
                    onClick={openChiTitCngVicDefault3}
                  >
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.taskTitle}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.progressParent}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/progress.svg"
                          />
                          <img
                            className={styles.downVectorIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.text}>
                            Lập trình hiệu ứng cho website
                          </div>
                        </div>
                      </div>
                      <div className={styles.tasknameGroup}>
                        <div className={styles.frameParent9}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/ucommentdots2.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                        <div className={styles.taskname6}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.assignees}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic9} />
                        <div className={styles.state9} />
                        <div className={styles.label13}>KA</div>
                      </div>
                      <div className={styles.tngAnh}>Tùng Anh</div>
                    </div>
                    <img
                      className={styles.priorityIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.dueDate6}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>20/02/2022</div>
                    </div>
                    <div className={styles.tag13}>
                      <div className={styles.marketing}>Mới được giao</div>
                    </div>
                    <div className={styles.works}>
                      <img
                        className={styles.ucodeBranchIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>3</div>
                    </div>
                    <div className={styles.projectState}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> đang xử lý</span>
                        </div>
                      </div>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> quá hạn</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.action2}>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.celldepartment}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.marketing}>Marketing</div>
                    </div>
                  </div>
                  <div className={styles.priorityParent}>
                    <img
                      className={styles.priorityIcon1}
                      alt=""
                      src="/priority1.svg"
                    />
                    <div className={styles.priorityIcon1}>
                      <div className={styles.userpic16} />
                      <div className={styles.state10} />
                      <div className={styles.label14}>HH</div>
                    </div>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/ucalendaralt1.svg"
                    />
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/uusersalt1.svg"
                    />
                  </div>
                  <div className={styles.listItem1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.taskTitle1}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.progressParent}>
                          <img
                            className={styles.progressIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.downVectorIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.taskname11}>
                            Thiết kế giao diện Dashboard và Todo list
                          </div>
                        </div>
                      </div>
                      <div className={styles.tasknameGroup}>
                        <div className={styles.frameParent9}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                        <div className={styles.taskname6}>
                          <img
                            className={styles.ucodeBranchIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.tasknameWrapper}>
                            <div className={styles.marketing}>3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.assignees}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic9} />
                        <div className={styles.state9} />
                        <div className={styles.label13}>KA</div>
                      </div>
                      <div className={styles.tngAnh}>Tùng Anh</div>
                    </div>
                    <img
                      className={styles.priorityIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.dueDate6}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>20/02/2022</div>
                    </div>
                    <div className={styles.tag14}>
                      <div className={styles.marketing}>Hoàn thành</div>
                    </div>
                    <div className={styles.works}>
                      <img
                        className={styles.ucodeBranchIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.text}>3</div>
                    </div>
                    <div className={styles.projectState}>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> đang xử lý</span>
                        </div>
                      </div>
                      <div className={styles.instanceParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.text}>
                          <span className={styles.span}>20</span>
                          <span> quá hạn</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.action2}>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                      <div className={styles.iconAction}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.celldepartment}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.marketing}>Marketing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.uplusGroup}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/uplus2.svg"
                  />
                  <div className={styles.daysLeft}>Thêm subtask</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.frameParent24}>
                <div className={styles.downWrapper}>
                  <img className={styles.downIcon7} alt="" src="/down.svg" />
                </div>
                <div className={styles.mT}>Checklist</div>
              </div>
              <div className={styles.frameParent25}>
                <div className={styles.componentParent}>
                  <div className={styles.frameParent26}>
                    <div className={styles.checkBoxParent}>
                      <div className={styles.priorityIcon1}>
                        <div className={styles.checkBoxInner} />
                      </div>
                      <div className={styles.text}>
                        Nghiên cứu tài liệu, đề xuất trước giải pháp
                      </div>
                    </div>
                    <div className={styles.avtContainer}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic18} />
                        <div className={styles.state9} />
                        <div className={styles.label22}>KA</div>
                      </div>
                      <div className={styles.dueDate18}>
                        <img
                          className={styles.ulinkAltIcon}
                          alt=""
                          src="/ucalendaralt3.svg"
                        />
                        <div className={styles.cn2Ngy}>Ngày mai</div>
                      </div>
                      <img
                        className={styles.progressIcon}
                        alt=""
                        src="/uanglerightb.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent26}>
                    <div className={styles.checkBoxParent}>
                      <div className={styles.priorityIcon1}>
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-5.svg"
                        />
                      </div>
                      <div className={styles.text}>
                        Trao đổi với team Design
                      </div>
                    </div>
                    <div className={styles.avtContainer}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic18} />
                        <div className={styles.state9} />
                        <div className={styles.label22}>KA</div>
                      </div>
                      <div className={styles.dueDate19}>
                        <img
                          className={styles.ulinkAltIcon}
                          alt=""
                          src="/ucalendaralt4.svg"
                        />
                        <div className={styles.text}>--/--/--</div>
                      </div>
                      <img
                        className={styles.progressIcon}
                        alt=""
                        src="/uanglerightb.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent28}>
                    <div className={styles.checkBoxParent}>
                      <div className={styles.priorityIcon1}>
                        <div className={styles.checkBoxInner} />
                      </div>
                      <div className={styles.text}>Lấy yêu cầu của sếp</div>
                    </div>
                    <div className={styles.avtContainer}>
                      <div className={styles.avt11}>
                        <div className={styles.userpic18} />
                        <div className={styles.state9} />
                        <div className={styles.label22}>KA</div>
                      </div>
                      <div className={styles.dueDate19}>
                        <img
                          className={styles.ulinkAltIcon}
                          alt=""
                          src="/ucalendaralt4.svg"
                        />
                        <div className={styles.text}>--/--/--</div>
                      </div>
                      <img
                        className={styles.progressIcon}
                        alt=""
                        src="/uanglerightb.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.uplusParent}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/uplus2.svg"
                  />
                  <div className={styles.daysLeft}>Thêm checklist</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.iconfilewordParent}>
              <div className={styles.avt23}>
                <div className={styles.userpic21} />
                <div className={styles.state21} />
                <div className={styles.label25}>HN</div>
              </div>
              <div className={styles.nhpNiDungParent}>
                <div className={styles.onceYouGet}>Nhập nội dung</div>
                <div className={styles.iconfilewordParent}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/upaperclip1.svg"
                  />
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/uimageupload.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modalfooter}>
            <div className={styles.iconfilewordParent}>
              <div className={styles.button1}>
                <img
                  className={styles.progressIcon}
                  alt=""
                  src="/uangleup.svg"
                />
                <div className={styles.daysLeft}>Duyệt</div>
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.progressIcon}
                  alt=""
                  src="/uangleup.svg"
                />
                <div className={styles.daysLeft}>Hoàn thành</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.daysLeft}>Cập nhật</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isChatOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChat}
        >
          <Chat onClose={closeChat} />
        </PortalPopup>
      )}
      {isMoreOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMore}
        >
          <More onClose={closeMore} />
        </PortalPopup>
      )}
      {isToggleOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeToggle}
        >
          <Toggle onClose={closeToggle} />
        </PortalPopup>
      )}
      {isFrameInstanceOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrameInstance}
        >
          <FrameInstance onClose={closeFrameInstance} />
        </PortalPopup>
      )}
      {isNotificationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification}
        >
          <Notification1 onClose={closeNotification} />
        </PortalPopup>
      )}
      {isNotification1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification1}
        >
          <Notification1 onClose={closeNotification1} />
        </PortalPopup>
      )}
      {isPopupAddFileOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupAddFile}
        >
          <PopupAddFile onClose={closePopupAddFile} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault1}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault1} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault2}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault2} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault3}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault3} />
        </PortalPopup>
      )}
    </>
  );
};

export default ChiTitCngVicDefault;
