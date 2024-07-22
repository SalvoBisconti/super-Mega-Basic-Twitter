import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import Image from "next/image";
import { tweetData } from "@/mocks/tweet";
import axios from "axios";

const TweetElement = (props: { data: tweetData; fetchTweets: any }) => {
  const { data, fetchTweets } = props;

  //FUNZIONE INCREMENTO LIKES
  const onHandleLike = async (id: number) => {
    try {
      await axios.post(`http://localhost:3001/tweets/${id}/like`);
      fetchTweets();
    } catch (error) {
      console.error("Errore nella post dei likes:", error);
    }
  };

  return (
    <div className="border p-2 flex flex-col  md:h-fit md:w-[400px] md:rounded">
      <div className="flex items-center gap-4">
        <Image
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=ais_user"
          width={65}
          height={65}
          alt="Immagine del profilo"
          className="border rounded-full "
        />
        <h3 className="italic text-gray-500">@{data.user}</h3>
        <div className="flex flex-col items-center ml-auto ">
          {data.likes > 0 ? (
            <IoMdHeart
              className=" fill-azure cursor-pointer text-xl"
              onClick={() => onHandleLike(data.id)}
            />
          ) : (
            <IoMdHeartEmpty
              className=" fill-azure cursor-pointer text-xl"
              onClick={() => onHandleLike(data.id)}
            />
          )}

          <h4>{data.likes}</h4>
        </div>
      </div>
      <p className="ml-20 pb-4">{data.content}</p>
    </div>
  );
};

export default TweetElement;
