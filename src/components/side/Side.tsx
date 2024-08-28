import "./Side.scss";
import AddIcon from "@mui/icons-material/Add";
import {
  collection,
  addDoc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { db } from "../../firebase";
import useFirebase from "../../hooks/useFirebase";
import { useAppSelector } from "../../app/hooks";
import { Channel } from "./channel/Channel";

export const Side = () => {
  const user = useAppSelector((state) => state.user.user);

  const { documents: channels } = useFirebase("channels");

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルの名前を入力してください");

    if (channelName) {
      const docRef: DocumentReference<DocumentData> = await addDoc(
        collection(db, "channels"),
        {
          channelName: channelName,
        }
      );
    }
  };

  return (
    <div className="side">
      <div className="side_head">
        <h1 className="side_title">Chat-app</h1>
      </div>
      <div className="side_body">
        <div className="side_nameHead">
          <h2 className="side_name">チャンネルリスト</h2>
          <AddIcon className="side_addChannel" onClick={() => addChannel()} />
        </div>
        <div className="side_channels">
          {channels.map((channel) => (
            <Channel
              id={channel.id}
              channel={channel}
              key={channel.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};