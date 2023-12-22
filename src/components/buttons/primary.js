import HStack from "../layout/HStack";
import VStack from "../layout/VStack";

const Primary = ({ children }) => {
  return (
    <button className=' flex flex-row bg-gold01 text-black  rounded-[16px] hover:border-gold01 hover:text-white02  hover:bg-transparent w-fit h-fit px-10 active:text-black01  border-gold01 border-[4px]  '>
      {children}
    </button>
  );
};

export default Primary;
