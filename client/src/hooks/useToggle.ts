import { useState } from "react";

function useToggle(initialState?: boolean, trueState?: true, falseState?: false): [boolean, () => void];
function useToggle(initialState: string, trueState: string, falseState: string): [string, () => void];
function useToggle(initialState:boolean|string=false, trueState:boolean|string=true, falseState:boolean|string=false) {
  const [toggleVal, setToggleVal] = useState(initialState);

  const toggle = () => {
    setToggleVal((oldState) => (oldState === trueState ? falseState : trueState));
  };

  return [toggleVal, toggle];
}

export default useToggle;
