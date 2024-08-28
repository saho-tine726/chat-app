import "./Channel.scss";
import { useEffect } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { useAppDispatch } from "../../../app/hooks";
import { setChannelInfo } from "../../../features/appSlice";

type Props = {
  id: string;
  channel: DocumentData;
};

export const Channel = (props: Props) => {
  const { id, channel } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channel.channel.channelName,
      })
    );
  }, []);

  return (
    <div
      className="channel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <p className="channel_title">
        <span>#</span><span>{channel.channel.channelName}</span>
      </p>
    </div>
  );
};
