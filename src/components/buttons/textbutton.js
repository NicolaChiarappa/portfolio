const TextButton = ({ children }) => {
  return (
    <button className='flex felx-col w-fit h-fit text-white02 active:text-black01 '>
      {children}
    </button>
  );
};

export default TextButton;
