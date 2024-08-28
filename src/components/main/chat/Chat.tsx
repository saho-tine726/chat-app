import { Timestamp } from "firebase/firestore";
import "./Chat.scss";

type Props = {
  message: string;
  timestamp: Timestamp;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

export const Chat = (props: Props) => {
  const { message, timestamp, user } = props;

  return (
    <div className="chat">
      <div className="chat_img">
        <img src={user?.photo} alt={user?.displayName} loading="lazy" />
      </div>
      <div className="chat_content">
        <div className="chat_head">
          <p className="chat_name">{user?.displayName}</p>
          <p className="chat_date">{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
        <div className="chat_text">{message}</div>
      </div>
    </div>
  );
};
