import TweetElement from "../tweetElement";
import axios from "axios";
import { useState, useEffect } from "react";
import { tweetData } from "@/mocks/tweet";

const TweetList = () => {
  const [tweetsData, setTweetsData] = useState<tweetData[]>([]);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tweets");
      setTweetsData(response.data);
    } catch (error) {
      console.error("Errore nella fetch:", error);
    }
  };

  // const onHandleLike = async (id: any) => {
  //   try {
  //     await axios.post(`http://localhost:3000/tweets/${id}/like`);
  //     fetchTweets();
  //   } catch (error) {
  //     console.error('Error liking tweet:', error);
  //   }
  // };

  console.log(tweetsData);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-azure text-xl pl-2">Tweet più recenti</h2>
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap md:gap-4">
        {tweetsData.map((element) => (
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
