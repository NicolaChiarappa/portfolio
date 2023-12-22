import React from "react";
import HStack from "./layout/HStack";
import TextButton from "./buttons/textbutton";
import Primary from "./buttons/primary";
import Image from "next/image";

const Navbar = () => {
  return (
    <HStack style='w-full justify-start gap-10  h-fit py-5  text-nowrap'>
      <TextButton>
        <p className='font-p text-p2 '>Home</p>
      </TextButton>
      <TextButton>
        <p className='font-p text-p2 '>Portfolio</p>
      </TextButton>
      <TextButton>
        <p className='font-p text-p2 '>Chi sono</p>
      </TextButton>

      <div className='ml-20'>
        <Primary>
          <p className='font-p text-p2 '>Contatti</p>
        </Primary>
      </div>
      <HStack style='w-full justify-end  gap-5'></HStack>
    </HStack>
  );
};

export default Navbar;
