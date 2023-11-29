"use client";

const Transition = () => {
  const handleClick = () => {
    console.log(1122);
    // window.location.href = "https://naver.com";
    // document.startViewTransition(() => {
    //   console.log(11);
    // });
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Transition;
