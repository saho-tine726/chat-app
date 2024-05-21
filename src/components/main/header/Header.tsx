import { useRef, useEffect, useState } from 'react';
import "./Header.scss";
import { useAppSelector } from "../../../app/hooks";
import { auth } from "../../../firebase";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.clientHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
  }, []);

  const user = useAppSelector((state) => state.user.user);
  const channelName = useAppSelector((state) => state.app.channelName);

  return (
    <div className="header" ref={headerRef}>
      <div className="header_title">
        <span>#</span><span>{channelName}</span>
      </div>
      <div className="header_account">
        <div className="header_accountIcon">
          <div className="header_accountImg" onClick={() => auth.signOut()}>
            <img src={user?.photo} alt={user?.displayName} loading="lazy" />
          </div>
          <div className="header_logoutText">クリックで<br />ログアウトします。</div>
        </div>
        <p className="header_accountName">{user?.displayName}</p>
      </div>
    </div>
  );
};
