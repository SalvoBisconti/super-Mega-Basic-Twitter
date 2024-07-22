import { FaTwitter } from "react-icons/fa";
import Form from "../form";

const FirstSection = () => {
  return (
    <section className="h-[400px] bg-azure flex flex-col gap-10  md:items-center">
      <h1 className="font-bold text-white text-3xl pt-2">
        Super Mega Basic Twitter
        <FaTwitter className="inline ml-2" />
      </h1>

      <Form />
    </section>
  );
};
export default FirstSection;
