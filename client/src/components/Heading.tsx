import { HeadingType } from "../types";

const Heading = ({ text }: HeadingType) => {
  return (
    <h1 className="mx-auto w-fit text-xl  font-Kanit font-medium dark:text-white text-black">
      {text}
    </h1>
  );
};

export default Heading;
