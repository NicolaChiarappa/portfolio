import React from "react";
import Navbar from "../components/navbar";
import HStack from "../components/layout/HStack";
import VStack from "../components/layout/VStack";
import Image from "next/image";
import Primary from "../components/buttons/primary";
import Secondary from "../components/buttons/secondary";
import {
  Heading1,
  Heading2,
  Heading3,
} from "../components/typography/Headings";

import {
  Paragraph1,
  Paragraph2,
  Paragraph3,
} from "../components/typography/Paragraphs";
import TextButton from "../components/buttons/textbutton";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  const AppIcons = [
    "/Flutter.png",
    "/Firebase.png",
    "/GitHub.png",
    "/Visual Studio.png",
  ];
  const WebIcons = [
    "/HTML.png",
    "/CSS.png",
    "/JavaScript.png",
    "/React.png",
    "/Next.js.png",
    "/Nodejs.png",
    "/Tailwind CSS.png",
    "/Firebase.png",
    "/GitHub.png",
    "/Visual Studio.png",
  ];

  const DesignIcons = [
    "/Adobe Illustrator.png",
    "/Adobe Photoshop.png",
    "/Figma.png",
  ];
  return (
    <>
      <VStack style='gap-16'>
        <Hero></Hero>
        <VStack>
          <Skill
            title='Applicazioni'
            subtitle='Di solito uso Flutter'
            images={AppIcons}
          ></Skill>
          <Skill
            title='Siti web'
            subtitle='Di solito uso Flutter'
            images={WebIcons}
          ></Skill>
          <Skill
            title='Design'
            subtitle='Di solito uso Flutter'
            images={DesignIcons}
          ></Skill>
        </VStack>

        <Timeline></Timeline>
        <Road></Road>
        <Portfolio></Portfolio>
      </VStack>
    </>
  );
};

const Hero = () => {
  return (
    <VStack style='mt-24'>
      <HStack style='w-full justify-between  h-fit'>
        <div className='w-[563px] h-[442px] relative'>
          <Image src='/portrait.png' fill alt=''></Image>
        </div>
        <VStack style='w-full h-fit justify-center gap-10 text-white03 items-end absolute right-32 '>
          <Heading2>
            Ciao sono<span className='text-gold02 ml-4'>Nick</span>
          </Heading2>
          <Paragraph1 style='text-right'>
            Sono uno <span className='text-gold02'>sviluppatore</span> e
            <br></br> aspirante <span className='text-gold02'>designer</span>
          </Paragraph1>
          <HStack style=' gap-5'>
            <Primary>
              <Paragraph2 color=' '>Contattami</Paragraph2>
            </Primary>
          </HStack>
        </VStack>
      </HStack>
      <HStack style='w-full h-20 justify-center'>
        <MdKeyboardDoubleArrowDown
          size={80}
          color='#D7C7DE'
        ></MdKeyboardDoubleArrowDown>
      </HStack>
    </VStack>
  );
};

const Skill = ({ title, subtitle, images }) => {
  return (
    <HStack style='w-full h-56   items-center justify-between'>
      <VStack style='w-1/2 '>
        <Heading3>{title}</Heading3>
        <Paragraph2>{subtitle}</Paragraph2>
      </VStack>
      <HStack style='w-1/2  flex-wrap gap-5'>
        {images.map((el, index) => {
          return (
            <div className='w-20 h-20 relative' key={index}>
              <Image src={"/icons" + el} alt='' fill></Image>
            </div>
          );
        })}
      </HStack>
    </HStack>
  );
};

const Timeline = () => {
  return (
    <VStack style=''>
      <Heading2>Da dove vengo</Heading2>
      <div className='w-full h-[428px] relative '>
        <Image src='/timeline.svg' alt='' fill />
      </div>
    </VStack>
  );
};

const Road = () => {
  return (
    <VStack style='w-full h-fit'>
      <Heading2>Dove vado</Heading2>
      <HStack style='flex-wrap gap-16'>
        <VStack style='w-[28%]'>
          <Heading3 color='gold02'>Front-end</Heading3>
          <Paragraph2>
            Continuo a studiare e ad approfondire librerie e framekork di
            Front-end
          </Paragraph2>
        </VStack>
        <VStack style='w-[28%]'>
          <Heading3 color='gold02'>UI/UX</Heading3>
          <Paragraph2>
            Mi sono da poco immerso nel mondo del design di interfacce. Sto
            studiando i fondamentali.
          </Paragraph2>
        </VStack>
        <VStack style='w-[28%]'>
          <Heading3 color='gold02'>Università</Heading3>
          <Paragraph2>
            Continuo a studiare per laurearmi in informatica.
          </Paragraph2>
        </VStack>
      </HStack>
      <VStack style='w-1/2 mt-10'>
        <Heading3>I miei obiettivi</Heading3>
        <Paragraph2>Sto lavorando sui miei punti deboli:</Paragraph2>
        <ul className='list-disc text-white02'>
          <li>
            <Paragraph2 style='font-bold'>Migliore organizzazione</Paragraph2>
          </li>
          <li>
            <Paragraph2 style='font-bold'>Codice più pulito</Paragraph2>
          </li>
          <li>
            <Paragraph2 style='font-bold'>Maggiori collaborazioni</Paragraph2>
          </li>
          <li>
            <Paragraph2 style='font-bold'>Più networking</Paragraph2>
          </li>
        </ul>
      </VStack>
    </VStack>
  );
};

const Portfolio = () => {
  return (
    <VStack>
      <HStack style='items-end justify-between'>
        <Heading2 style=''>Cosa ho fatto</Heading2>
        <div className='mb-8'>
          <Secondary>
            <Paragraph2 color=' '>Visita portfolio</Paragraph2>
          </Secondary>
        </div>
      </HStack>
      <HStack style='w-full max-2xl:gap-[4%] 2xl:gap-[2%] flex-wrap'>
        <PortfolioComponents img='/portfolioHome.png'></PortfolioComponents>
        <PortfolioComponents img='/wt.png'></PortfolioComponents>
        <PortfolioComponents img='/uniquizmockup.png'></PortfolioComponents>
        <PortfolioComponents img='/portfoliomockup.png'></PortfolioComponents>
      </HStack>
      <div className='h-screen'></div>
    </VStack>
  );
};

const PortfolioComponents = ({ img }) => {
  return (
    <VStack style='max-2xl:w-[48%] 2xl:w-[32%] h-80 items-center    relative mb-10'>
      <div className='w-full h-full bg-white01 opacity-20 shadow-xl shadow-black01 rounded-xl absolute top-0'></div>
      <VStack style='w-full h-full  opacity-0 rounded-xl absolute z-10 top-0 hover:opacity-100 p-10 justify-end bg-black01/90'>
        <Paragraph1>Osteria della madonna</Paragraph1>
        <Paragraph2>Ristorante</Paragraph2>
        <HStack style='gap-3'>
          <Primary>
            <Paragraph3>Design</Paragraph3>
          </Primary>
          <Primary>
            <Paragraph3>e-Commerce</Paragraph3>
          </Primary>
        </HStack>
      </VStack>
      <HStack style='w-full justify-center  h-80   relative'>
        <Image
          alt=''
          src={img}
          className='object-contain w-max h-full'
          width={1000}
          height={1000}
        />
      </HStack>
    </VStack>
  );
};

export default Home;
