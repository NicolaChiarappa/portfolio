import HStack from "../layout/HStack";
import VStack from "../layout/VStack";

const Secondary = ({ children }) => {
  return (
    <button className=' flex flex-row text-white01 border-[4px] border-white01  rounded-[16px] hover:border-transparent hover:text-white02   w-fit h-fit px-10 active:text-black01 box-border  '>
      {children}
    </button>
  );
};

export default Secondary;
