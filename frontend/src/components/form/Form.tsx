import axios from "axios";
import { useState } from "react";

const Form = () => {
  // const [content, setContent] = useState<{}>({
  //   user: "",
  //   content: "",
  // });
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = async (event: any) => {
    event.preventDefault();
    const tweetData = { user, content };
    try {
      await axios.post("http://localhost:3001/tweets", tweetData);
      // setContent({ id: 0, user: "", content: "" });
      setUser("");
      setContent("");
      // onAdd();
      console.log("inviato," + tweetData);
    } catch (error) {
      console.error("Errore nella chiamata POST:", error);
    }
  };

  // const onHandleChange = (event: any) => {
  //   const { name, value } = event.target;
  //   setContent({ ...content, [name]: value });
  // };

  return (
    <div className="border p-6 md:p-8 bg-white md:w-[450px] md:rounded md:border-white">
      <form className="flex flex-col gap-5" onSubmit={onHandleSubmit}>
        <div className="flex gap-2 items-baseline">
          <label htmlFor="name">Nome utente:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border outline-none px-2 py-1"
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
            className=" focus:outline-azure "
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
