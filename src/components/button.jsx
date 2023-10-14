import { useContext } from "react";
import { func } from 'prop-types';

import { TextContext } from "../context/text-context";

export default function Button({ onClick }) {
  const { text } = useContext(TextContext);
  return <button onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  onClick: func,
};
