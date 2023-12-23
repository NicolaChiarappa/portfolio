import React from "react";
import HStack from "./layout/HStack";
import TextButton from "./buttons/textbutton";
import Primary from "./buttons/primary";
import Image from "next/image";

const Navbar = () => {
  return (
    <HStack
      style='w-full justify-start gap-10  h-fit py-5  text-nowrap sticky top-0
     left-0  z-50 backdrop-blur-3xl px-32'
    >
      <TextButton>
        <p className='font-p text-p2 '>Home</p>
      </TextButton>
      <TextButton>
        <p className='font-p text-p2 '>Portfolio</p>
      </TextButton>
      <TextButton>
        <p className='font-p text-p2 '>Chi sono</p>
      </TextButton>

      <HStack style='w-full justify-end  gap-5'>
        <Primary>
          <p className='font-p text-p2 '>Contatti</p>
        </Primary>
      </HStack>
    </HStack>
  );
};

export default Navbar;
