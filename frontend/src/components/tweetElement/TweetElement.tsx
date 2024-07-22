import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

const TweetElement = () => {
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
        <h3 className="italic text-gray-500">$_Nome utente</h3>
        <FaRegHeart className="block ml-auto fill-azure" />
      </div>
      <p className="ml-20">$_tweet</p>
    </div>
  );
};

export default TweetElement;
