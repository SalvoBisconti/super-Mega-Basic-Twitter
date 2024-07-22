import { tweetData } from "@/mocks/tweet";
import axios from "axios";
import { Dispatch, useState } from "react";

const Form = (props: {
  tweetsData: tweetData[];
  setTweetsData: Dispatch<React.SetStateAction<any>>;
}) => {
  const { tweetsData, setTweetsData } = props;
  const [user, setUser] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onHandleSubmit = async (event: any) => {
    event.preventDefault();
    const tweetData = { user, content, likes: 0 };
    try {
      await axios.post("http://localhost:3001/tweets", tweetData);
      setUser(""); //RESETTA L'INPUT
      setContent(""); //RESETTA L'INPUT
      setTweetsData([...tweetsData, tweetData]); // AGGIORNA LA LISTA DEI TWEET DOPO IL POST
    } catch (error) {
      console.error("Errore nella chiamata POST:", error);
    }
  };

  return (
    <div className="border p-6 md:p-8 bg-white md:w-[450px] md:rounded md:border-white">
      <form className="flex flex-col gap-5" onSubmit={onHandleSubmit}>
        <div className="flex flex-col gap-2 items-baseline">
          <label htmlFor="name">Nome utente:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border rounded focus:shadow-sm focus:shadow-azure outline-none px-2 py-1"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tweet">A cosa stai pensando?</label>
          <textarea
            id="tweet"
            name="tweet"
            rows={3}
            cols={50}
            placeholder="Scrivi qui il tuo tweet"
            className=" p-2 rounded focus:shadow-sm outline-none focus:shadow-azure border  "
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <button
          type="submit"
          className="border cursor-pointer block bg-azure text-white p-2 rounded w-fit
          d-block ml-auto "
        >
          Invia tweet
        </button>
      </form>
    </div>
  );
};

export default Form;
