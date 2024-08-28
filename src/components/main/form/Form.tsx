import React, { useState } from 'react'
import "./Form.scss";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { DocumentData, DocumentReference, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAppSelector } from "../../../app/hooks";

export const Form = () => {
  const [inputText, setInputText] = useState<string>("");
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.app.channelId);
  const channelName = useAppSelector((state) => state.app.channelName);

  const addMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        timestamp: serverTimestamp(),
        message: inputText,
        user: user,
      }
    );

    setInputText("");
  };

  return (
    <form action="" className="form">
      <div className="form_input">
        <input
          type="text"
          placeholder={`#${channelName}チャンネルへメッセージを投稿`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
          value={inputText}
          disabled={Boolean(!channelId)}
        />
        <div className="form_addBtn">
          <button
            type="submit"
            className="chatInputButton"
            disabled={Boolean(!channelId)}
            onClick={(e: React.MouseEvent<HTMLElement>) => addMessage(e)}
          >
            <NoteAltIcon />
          </button>
        </div>
      </div>
    </form>
  )
}
