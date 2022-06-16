import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../store/actions";
import { useActions } from "./useActions";

export const useColors = () => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors);
  const activeColor = useSelector((state) =>
    state.colors.find(({ isSelected }) => isSelected)
  );
  const actions = useActions({ setColor }, dispatch);

  return { colors, activeColor, ...actions };
};
