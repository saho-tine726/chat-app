import "./Main.scss";
import useSubCollection from "../../hooks/useSubCollection";
import { Header } from "./header/Header";
import { Chat } from "./chat/Chat";
import { Form } from "./form/Form";

export const Main = () => {
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  return (
    <div className="main">
      <Header />
      <div className="main_chat">
        {messages.map((message, index) => (
          <Chat
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};