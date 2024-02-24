import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (!status) {
    return <AiOutlineHeart size={30} color="grey" onClick={toggle} />;
  }
  return <AiFillHeart size={30} color="red" onClick={toggle} />;
};

export default Like;
