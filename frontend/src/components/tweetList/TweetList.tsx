import TweetElement from "../tweetElement";

const TweetList = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-azure text-xl pl-2">Tweet più recenti</h2>
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap md:gap-4">
        <TweetElement />
        <TweetElement />
        <TweetElement />
      </div>
    </div>
  );
};

export default TweetList;
