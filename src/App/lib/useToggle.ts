import { useState } from "react";

export const useToggle = (initialState: boolean): [boolean, (...args: any[])=>void] => {
  const [state, setState] = useState(initialState)
  const toggleState = () => setState(!state)
  return [state, toggleState]
}
