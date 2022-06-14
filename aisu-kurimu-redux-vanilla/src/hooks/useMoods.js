import { useActions } from "./useActions";
import { useSelector, useDispatch } from "react-redux";
import { setMood } from "../store/actions";

export const useMoods = () => {
  const dispatch = useDispatch();
  const moods = useSelector((state) => state.moods);
  const activeMood = useSelector((state) =>
    state.moods.find((mood) => mood.isSelected)
  );

  const actions = useActions({ setMood }, dispatch);

  return { moods, activeMood, ...actions };
};
