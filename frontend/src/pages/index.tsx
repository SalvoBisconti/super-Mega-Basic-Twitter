import Form from "@/components/form";
import FirstSection from "@/components/firstSection";
import TweetList from "@/components/tweetList";
// import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      {/* <div className="h-[400px] bg-azure flex flex-col justify-center md:items-center">
        <h1 className="font-bold text-white text-3xl">
          Super Mega Basic Twitter
          <FaTwitter className="inline ml-2" />
        </h1>
        <Form />
      </div> */}
      <FirstSection />
      <TweetList />
    </main>
  );
}
