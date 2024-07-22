import TweetElement from "../tweetElement";
import axios from "axios";
import { useEffect, Dispatch } from "react";
import { tweetData } from "@/mocks/tweet";

const TweetList = (props: {
  tweetsData: tweetData[];
  setTweetsData: Dispatch<React.SetStateAction<any>>;
}) => {
  const { tweetsData, setTweetsData } = props;

  useEffect(() => {
    fetchTweets();
  }, []);

  // PERMETTE L'AGGIORNAMENTO DOPO UN'ACTION
  const fetchTweets = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tweets");
      setTweetsData(response.data);
    } catch (error) {
      console.error("Errore nella fetch:", error);
    }
  };
  console.log(tweetsData);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-azure text-xl pl-2">
        Scopri tutti i tweet
      </h2>
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap md:gap-4">
        {tweetsData.length > 0 &&
          tweetsData.map((element) => (
            <TweetElement
              data={element}
              key={element.id}
              fetchTweets={fetchTweets}
            />
          ))}
      </div>
    </div>
  );
};

export default TweetList;
