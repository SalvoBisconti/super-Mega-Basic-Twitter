import { FaRegHeart } from "react-icons/fa";
import { tweetData } from "@/mocks/tweet";
import axios from "axios";

const TweetElement = (props: { data: tweetData; fetchTweets: any }) => {
  const { data, fetchTweets } = props;

  const onHandleLike = async (id: number) => {
    try {
      await axios.post(`http://localhost:3001/tweets/${id}/like`);
      fetchTweets();
    } catch (error) {
      console.error("Errore nella post dei likes:", error);
      console.log(id);
    }
  };

  return (
    <div className="border p-2 flex flex-col gap-2 md:h-fit md:w-[400px] md:rounded">
      <div className="flex items-center gap-4">
        <img
          src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
          width={65}
          height={65}
          alt="Immagine del profilo"
          className="border rounded-full p-2"
        />
        <h3 className="italic text-gray-500">@{data.user}</h3>
        <div className="flex flex-col items-center ml-auto ">
          <FaRegHeart
            className=" fill-azure cursor-pointer"
            onClick={() => onHandleLike(data.id)}
          />
          <h4>{data.likes}</h4>
        </div>
      </div>
      <p className="ml-20">{data.content}</p>
    </div>
  );
};

export default TweetElement;
