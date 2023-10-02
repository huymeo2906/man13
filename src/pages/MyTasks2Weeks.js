import { useState, useCallback } from "react";
import SettingCollumn from "../components/SettingCollumn";
import PortalPopup from "../components/PortalPopup";
import Calendar from "../components/Calendar";
import ChiTitCngVicDefault from "../components/ChiTitCngVicDefault";
import { useNavigate } from "react-router-dom";
import styles from "./MyTasks2Weeks.module.css";

const MyTasks2Weeks = () => {
  const [isSettingCollumnOpen, setSettingCollumnOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isCalendar1Open, setCalendar1Open] = useState(false);
  const [isChiTitCngVicDefaultOpen, setChiTitCngVicDefaultOpen] =
    useState(false);
  const [isChiTitCngVicDefault1Open, setChiTitCngVicDefault1Open] =
    useState(false);
  const [isChiTitCngVicDefault2Open, setChiTitCngVicDefault2Open] =
    useState(false);
  const [isChiTitCngVicDefault3Open, setChiTitCngVicDefault3Open] =
    useState(false);
  const [isChiTitCngVicDefault4Open, setChiTitCngVicDefault4Open] =
    useState(false);
  const [isChiTitCngVicDefault5Open, setChiTitCngVicDefault5Open] =
    useState(false);
  const [isChiTitCngVicDefault6Open, setChiTitCngVicDefault6Open] =
    useState(false);
  const [isChiTitCngVicDefault7Open, setChiTitCngVicDefault7Open] =
    useState(false);
  const [isChiTitCngVicDefault8Open, setChiTitCngVicDefault8Open] =
    useState(false);
  const [isChiTitCngVicDefault9Open, setChiTitCngVicDefault9Open] =
    useState(false);
  const [isChiTitCngVicDefault10Open, setChiTitCngVicDefault10Open] =
    useState(false);
  const [isChiTitCngVicDefault11Open, setChiTitCngVicDefault11Open] =
    useState(false);
  const [isChiTitCngVicDefault12Open, setChiTitCngVicDefault12Open] =
    useState(false);
  const [isChiTitCngVicDefault13Open, setChiTitCngVicDefault13Open] =
    useState(false);
  const [isChiTitCngVicDefault14Open, setChiTitCngVicDefault14Open] =
    useState(false);
  const [isChiTitCngVicDefault15Open, setChiTitCngVicDefault15Open] =
    useState(false);
  const [isChiTitCngVicDefault16Open, setChiTitCngVicDefault16Open] =
    useState(false);
  const [isChiTitCngVicDefault17Open, setChiTitCngVicDefault17Open] =
    useState(false);
  const [isChiTitCngVicDefault18Open, setChiTitCngVicDefault18Open] =
    useState(false);
  const [isChiTitCngVicDefault19Open, setChiTitCngVicDefault19Open] =
    useState(false);
  const [isChiTitCngVicDefault20Open, setChiTitCngVicDefault20Open] =
    useState(false);
  const [isChiTitCngVicDefault21Open, setChiTitCngVicDefault21Open] =
    useState(false);
  const [isChiTitCngVicDefault22Open, setChiTitCngVicDefault22Open] =
    useState(false);
  const [isChiTitCngVicDefault23Open, setChiTitCngVicDefault23Open] =
    useState(false);
  const [isChiTitCngVicDefault24Open, setChiTitCngVicDefault24Open] =
    useState(false);
  const [isChiTitCngVicDefault25Open, setChiTitCngVicDefault25Open] =
    useState(false);
  const navigate = useNavigate();

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  const openSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(true);
  }, []);

  const closeSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(false);
  }, []);

  const onProjectContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const openCalendar1 = useCallback(() => {
    setCalendar1Open(true);
  }, []);

  const closeCalendar1 = useCallback(() => {
    setCalendar1Open(false);
  }, []);

  const openChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(true);
  }, []);

  const closeChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(false);
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

  const openChiTitCngVicDefault4 = useCallback(() => {
    setChiTitCngVicDefault4Open(true);
  }, []);

  const closeChiTitCngVicDefault4 = useCallback(() => {
    setChiTitCngVicDefault4Open(false);
  }, []);

  const openChiTitCngVicDefault5 = useCallback(() => {
    setChiTitCngVicDefault5Open(true);
  }, []);

  const closeChiTitCngVicDefault5 = useCallback(() => {
    setChiTitCngVicDefault5Open(false);
  }, []);

  const openChiTitCngVicDefault6 = useCallback(() => {
    setChiTitCngVicDefault6Open(true);
  }, []);

  const closeChiTitCngVicDefault6 = useCallback(() => {
    setChiTitCngVicDefault6Open(false);
  }, []);

  const openChiTitCngVicDefault7 = useCallback(() => {
    setChiTitCngVicDefault7Open(true);
  }, []);

  const closeChiTitCngVicDefault7 = useCallback(() => {
    setChiTitCngVicDefault7Open(false);
  }, []);

  const openChiTitCngVicDefault8 = useCallback(() => {
    setChiTitCngVicDefault8Open(true);
  }, []);

  const closeChiTitCngVicDefault8 = useCallback(() => {
    setChiTitCngVicDefault8Open(false);
  }, []);

  const openChiTitCngVicDefault9 = useCallback(() => {
    setChiTitCngVicDefault9Open(true);
  }, []);

  const closeChiTitCngVicDefault9 = useCallback(() => {
    setChiTitCngVicDefault9Open(false);
  }, []);

  const openChiTitCngVicDefault10 = useCallback(() => {
    setChiTitCngVicDefault10Open(true);
  }, []);

  const closeChiTitCngVicDefault10 = useCallback(() => {
    setChiTitCngVicDefault10Open(false);
  }, []);

  const openChiTitCngVicDefault11 = useCallback(() => {
    setChiTitCngVicDefault11Open(true);
  }, []);

  const closeChiTitCngVicDefault11 = useCallback(() => {
    setChiTitCngVicDefault11Open(false);
  }, []);

  const openChiTitCngVicDefault12 = useCallback(() => {
    setChiTitCngVicDefault12Open(true);
  }, []);

  const closeChiTitCngVicDefault12 = useCallback(() => {
    setChiTitCngVicDefault12Open(false);
  }, []);

  const openChiTitCngVicDefault13 = useCallback(() => {
    setChiTitCngVicDefault13Open(true);
  }, []);

  const closeChiTitCngVicDefault13 = useCallback(() => {
    setChiTitCngVicDefault13Open(false);
  }, []);

  const openChiTitCngVicDefault14 = useCallback(() => {
    setChiTitCngVicDefault14Open(true);
  }, []);

  const closeChiTitCngVicDefault14 = useCallback(() => {
    setChiTitCngVicDefault14Open(false);
  }, []);

  const openChiTitCngVicDefault15 = useCallback(() => {
    setChiTitCngVicDefault15Open(true);
  }, []);

  const closeChiTitCngVicDefault15 = useCallback(() => {
    setChiTitCngVicDefault15Open(false);
  }, []);

  const openChiTitCngVicDefault16 = useCallback(() => {
    setChiTitCngVicDefault16Open(true);
  }, []);

  const closeChiTitCngVicDefault16 = useCallback(() => {
    setChiTitCngVicDefault16Open(false);
  }, []);

  const openChiTitCngVicDefault17 = useCallback(() => {
    setChiTitCngVicDefault17Open(true);
  }, []);

  const closeChiTitCngVicDefault17 = useCallback(() => {
    setChiTitCngVicDefault17Open(false);
  }, []);

  const openChiTitCngVicDefault18 = useCallback(() => {
    setChiTitCngVicDefault18Open(true);
  }, []);

  const closeChiTitCngVicDefault18 = useCallback(() => {
    setChiTitCngVicDefault18Open(false);
  }, []);

  const openChiTitCngVicDefault19 = useCallback(() => {
    setChiTitCngVicDefault19Open(true);
  }, []);

  const closeChiTitCngVicDefault19 = useCallback(() => {
    setChiTitCngVicDefault19Open(false);
  }, []);

  const openChiTitCngVicDefault20 = useCallback(() => {
    setChiTitCngVicDefault20Open(true);
  }, []);

  const closeChiTitCngVicDefault20 = useCallback(() => {
    setChiTitCngVicDefault20Open(false);
  }, []);

  const openChiTitCngVicDefault21 = useCallback(() => {
    setChiTitCngVicDefault21Open(true);
  }, []);

  const closeChiTitCngVicDefault21 = useCallback(() => {
    setChiTitCngVicDefault21Open(false);
  }, []);

  const openChiTitCngVicDefault22 = useCallback(() => {
    setChiTitCngVicDefault22Open(true);
  }, []);

  const closeChiTitCngVicDefault22 = useCallback(() => {
    setChiTitCngVicDefault22Open(false);
  }, []);

  const openChiTitCngVicDefault23 = useCallback(() => {
    setChiTitCngVicDefault23Open(true);
  }, []);

  const closeChiTitCngVicDefault23 = useCallback(() => {
    setChiTitCngVicDefault23Open(false);
  }, []);

  const openChiTitCngVicDefault24 = useCallback(() => {
    setChiTitCngVicDefault24Open(true);
  }, []);

  const closeChiTitCngVicDefault24 = useCallback(() => {
    setChiTitCngVicDefault24Open(false);
  }, []);

  const openChiTitCngVicDefault25 = useCallback(() => {
    setChiTitCngVicDefault25Open(true);
  }, []);

  const closeChiTitCngVicDefault25 = useCallback(() => {
    setChiTitCngVicDefault25Open(false);
  }, []);

  return (
    <>
      <div className={styles.myTasks2Weeks}>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.trangChParent}>
                <div className={styles.trangCh}>Trang chủ</div>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ucreatedashboard.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Dashboard</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennuGroup}>
                    <div className={styles.mennu1}>
                      <img
                        className={styles.uangleRightIcon}
                        alt=""
                        src="/ulistuialt.svg"
                      />
                      <div className={styles.hmNayWrapper}>
                        <div className={styles.hmNay}>Việc của tôi</div>
                      </div>
                      <img
                        className={styles.uangleRightIcon}
                        alt=""
                        src="/uangleright1.svg"
                      />
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.downParent}>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.dNParent}>
                          <div className={styles.dN}>Dự án</div>
                          <div className={styles.wrapper}>
                            <div className={styles.dN}>06</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameContainer}>
                        <div className={styles.menuFilterParent}>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>E-Work</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>CEO Loyalty</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Mobishop</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>
                                Lixil Ecommerce
                              </div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Travel Booking</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Golf Manage</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper}>
                          <div className={styles.uplusParent}>
                            <img
                              className={styles.uplusIcon}
                              alt=""
                              src="/uplus.svg"
                            />
                            <div className={styles.toDN}>Tạo dự án mới</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.downParent}>
                      <img
                        className={styles.downIcon}
                        alt=""
                        src="/down1.svg"
                      />
                      <div className={styles.dNParent}>
                        <div className={styles.dN}>Tiến độ</div>
                        <div className={styles.wrapper4}>
                          <div className={styles.dN}>06</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.downParent}>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.dNParent}>
                          <div className={styles.dN}>Việc đơn vị</div>
                          <div className={styles.container}>
                            <div className={styles.dN}>06</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.menuFilterParent}>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Giao</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Được giao</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.ulistUiAltParent}>
                              <img
                                className={styles.uplusIcon}
                                alt=""
                                src="/ulistuialt1.svg"
                              />
                              <div className={styles.eWork}>Theo dõi</div>
                            </div>
                            <div className={styles.container}>
                              <div className={styles.dN}>06</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/uchartline.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Báo cáo</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.headerParent}>
            <div className={styles.header}>
              <div className={styles.flow1Parent}>
                <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                <div className={styles.avt}>
                  <div className={styles.userpic} />
                  <div className={styles.state} />
                  <div className={styles.label}>KA</div>
                </div>
                <div className={styles.overviewParent}>
                  <div className={styles.trangCh}>Overview</div>
                  <div className={styles.employees}>Employees</div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.memberParent}>
                  <div className={styles.member}>
                    <div className={styles.avt1}>
                      <div className={styles.userpic1} />
                      <div className={styles.state1} />
                      <div className={styles.label1}>KA</div>
                    </div>
                    <div className={styles.avt2}>
                      <div className={styles.userpic2} />
                      <div className={styles.state1} />
                      <div className={styles.label1}>NH</div>
                    </div>
                    <div className={styles.avt3}>
                      <div className={styles.userpic3} />
                      <div className={styles.state1} />
                      <div className={styles.label1}>HN</div>
                    </div>
                    <div className={styles.avt4}>
                      <img
                        className={styles.ovalCopy3}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.wrapper9}>
                        <div className={styles.div12}>+3</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.ulistUiAltParent}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/usearch.svg"
                      />
                      <input
                     type="text"
                     placeholder="Search..."
                     value={searchTerm}
                     onChange={handleInputChange}
                       />
                    </div>
                    <img
                      className={styles.uangleDownIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.uplusWrapper}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/uplus1.svg"
                  />
                </div>
                <div className={styles.memberParent}>
                  <div className={styles.component2}>
                    <div className={styles.ucommentDotsWrapper}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/ucommentdots.svg"
                      />
                    </div>
                    <div className={styles.component2Child} />
                  </div>
                  <div className={styles.component2}>
                    <div className={styles.ucommentDotsWrapper}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/unotifiacation.svg"
                      />
                    </div>
                    <div className={styles.component2Child} />
                  </div>
                  <div className={styles.unsplashfgUd73uZmWrapper}>
                    <img
                      className={styles.unsplashfgUd73uZmIcon}
                      alt=""
                      src="/unsplashfg-ud73u-zm@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.filterParent}>
                <div className={styles.filter}>
                  <div className={styles.dNParent}>
                    <img
                      className={styles.ufilterIcon}
                      alt=""
                      src="/ufilter.svg"
                    />
                    <div className={styles.toDN}>Bộ lọc</div>
                  </div>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/uangleright2.svg"
                  />
                </div>
                <div className={styles.layout}>
                  <div className={styles.project}>
                    <div className={styles.uwebGridAltParent}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/ulistuialt2.svg"
                      />
                      <div className={styles.toDN}>List</div>
                    </div>
                    <img
                      className={styles.downIcon3}
                      alt=""
                      src="/down2.svg"
                      onClick={openSettingCollumn}
                    />
                  </div>
                  <div className={styles.project}>
                    <div className={styles.uwebGridAltParent}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/uwebgridalt.svg"
                      />
                      <div className={styles.toDN}>Bảng</div>
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                  <div
                    className={styles.project2}
                    onClick={onProjectContainer2Click}
                  >
                    <div className={styles.uwebGridAltParent}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/ucalendaralt.svg"
                      />
                      <div className={styles.toDN}>Lịch</div>
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                  <div className={styles.project}>
                    <div className={styles.uwebGridAltParent}>
                      <img
                        className={styles.ucreateDashboardIcon}
                        alt=""
                        src="/usubject.svg"
                      />
                      <div className={styles.toDN}>Timeline</div>
                    </div>
                    <img
                      className={styles.outlineSearch}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.time}>
                  <div className={styles.dNParent}>
                    <img
                      className={styles.uangleDoubleRightIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.spXpTheoParent}>
                      <div className={styles.spXpTheo}>Việc hiển thị</div>
                      <div className={styles.employees}>Ngày hôm nay</div>
                    </div>
                  </div>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.uangleLeftWrapper}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/uangleleft.svg"
                  />
                </div>
                <div className={styles.thng52022}>Tháng 5/2022</div>
                <div className={styles.uangleRightWrapper}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/uangleright3.svg"
                  />
                </div>
              </div>
              <div className={styles.project4}>
                <div className={styles.uwebGridAltParent}>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.toDN}>Tháng</div>
                </div>
                <img
                  className={styles.downIcon3}
                  alt=""
                  src="/down2.svg"
                  onClick={openCalendar}
                />
              </div>
              <div className={styles.project4}>
                <div className={styles.uwebGridAltParent}>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.toDN}>Hôm nay</div>
                </div>
                <img
                  className={styles.downIcon8}
                  alt=""
                  src="/oval-copy-3.svg"
                  onClick={openCalendar1}
                />
              </div>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.calendarParent}>
                <div className={styles.calendar}>
                  <div className={styles.dN}>T2</div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dN}>T3</div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dN}>T4</div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dN}>T5</div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dN}>T6</div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dN}>T7</div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dN}>CN</div>
                </div>
              </div>
              <div className={styles.calendarGroup}>
                <div className={styles.calendar7}>
                  <div className={styles.toDN}>15</div>
                </div>
                <div className={styles.calendar7}>
                  <div className={styles.toDN}>16</div>
                </div>
                <div className={styles.calendar9}>
                  <div className={styles.div13}>20</div>
                  <div className={styles.taskNameParent}>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault}
                    >
                      <div className={styles.input1}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault1}
                    >
                      <div className={styles.input2}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault2}
                    >
                      <div className={styles.input1}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault3}
                    >
                      <div className={styles.input1}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName4}
                      onClick={openChiTitCngVicDefault4}
                    >
                      <div className={styles.input5}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName4}
                      onClick={openChiTitCngVicDefault5}
                    >
                      <div className={styles.input5}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName4}
                      onClick={openChiTitCngVicDefault6}
                    >
                      <div className={styles.input5}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.label11}>+ 3 task</div>
                </div>
                <div className={styles.calendar10}>
                  <div className={styles.toDN}>18</div>
                </div>
                <div className={styles.calendar11}>
                  <div className={styles.toDN}>20</div>
                  <div
                    className={styles.taskName7}
                    onClick={openChiTitCngVicDefault7}
                  >
                    <div className={styles.input8}>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.label4}>Task name</div>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.outlineClose}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.calendar11}>
                  <div className={styles.toDN}>21</div>
                  <div
                    className={styles.taskName7}
                    onClick={openChiTitCngVicDefault8}
                  >
                    <div className={styles.input8}>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.label4}>Task name</div>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.outlineClose}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.calendar13}>
                  <div className={styles.div16}>22</div>
                  <div
                    className={styles.taskName}
                    onClick={openChiTitCngVicDefault9}
                  >
                    <div className={styles.input8}>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.label4}>Task name</div>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.outlineClose}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div
                    className={styles.taskName}
                    onClick={openChiTitCngVicDefault10}
                  >
                    <div className={styles.input8}>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.label4}>Task name</div>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.outlineClose}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.calendarGroup}>
                <div className={styles.calendar7}>
                  <div className={styles.toDN}>22</div>
                </div>
                <div className={styles.calendar9}>
                  <div className={styles.div13}>23</div>
                  <div className={styles.taskNameParent}>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault11}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault12}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault13}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault14}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault15}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault16}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault17}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.label23}>+ 3 task</div>
                </div>
                <div className={styles.calendar11}>
                  <div className={styles.toDN}>24</div>
                  <div
                    className={styles.taskName7}
                    onClick={openChiTitCngVicDefault18}
                  >
                    <div className={styles.input12}>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.label4}>Task name</div>
                      <img
                        className={styles.outlineSearch}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <img
                        className={styles.outlineClose}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.calendar7}>
                  <div className={styles.toDN}>25</div>
                </div>
                <div className={styles.calendar7}>
                  <div className={styles.toDN}>26</div>
                </div>
                <div className={styles.calendar9}>
                  <div className={styles.div13}>20</div>
                  <div className={styles.taskNameParent}>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault19}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault20}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault21}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault22}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName}
                      onClick={openChiTitCngVicDefault23}
                    >
                      <div className={styles.input12}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName4}
                      onClick={openChiTitCngVicDefault24}
                    >
                      <div className={styles.input5}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.taskName4}
                      onClick={openChiTitCngVicDefault25}
                    >
                      <div className={styles.input5}>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.label4}>Task name</div>
                        <img
                          className={styles.outlineSearch}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <img
                          className={styles.outlineClose}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.label11}>+ 3 task</div>
                </div>
                <div className={styles.calendar20}>
                  <div className={styles.toDN}>28</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSettingCollumnOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSettingCollumn}
        >
          <SettingCollumn onClose={closeSettingCollumn} />
        </PortalPopup>
      )}
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
      {isCalendar1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar1}
        >
          <Calendar onClose={closeCalendar1} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefaultOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault} />
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
      {isChiTitCngVicDefault4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault4}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault4} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault5}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault5} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault6}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault6} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault7}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault7} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault8Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault8}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault8} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault9Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault9}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault9} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault10Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault10}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault10} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault11Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault11}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault11} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault12Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault12}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault12} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault13Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault13}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault13} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault14Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault14}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault14} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault15Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault15}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault15} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault16Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault16}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault16} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault17Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault17}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault17} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault18Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault18}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault18} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault19Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault19}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault19} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault20Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault20}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault20} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault21Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault21}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault21} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault22Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault22}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault22} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault23Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault23}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault23} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault24Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault24}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault24} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault25Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault25}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault25} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyTasks2Weeks;
