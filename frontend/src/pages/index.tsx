import Form from "@/components/form";
import TweetList from "@/components/tweetList";
import { tweetData } from "@/mocks/tweet";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  const [tweetsData, setTweetsData] = useState<tweetData[]>([]);

  return (
    <main className="flex flex-col gap-4">
      <section className="h-[450px] bg-azure flex flex-col gap-10  md:items-center">
        <h1 className="font-bold text-white text-3xl pt-2 text-center">
          Super Mega Basic Twitter
          <FaTwitter className="inline ml-2" />
        </h1>
        <Form tweetsData={tweetsData} setTweetsData={setTweetsData} />
      </section>
      <TweetList tweetsData={tweetsData} setTweetsData={setTweetsData} />
    </main>
  );
}
