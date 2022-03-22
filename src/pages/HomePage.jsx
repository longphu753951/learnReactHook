import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import HobbyList from "../components/HobbyList";
import { addNewHobby, setActiveHobby } from "../reducers/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

export default (props) => {
  //Hoạt động tương tự như map state to props
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);

  //Hoạt động tương tự như map dispatch to props
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    // Random a hobby object: id + title
    const newId = randomNumber();
    const newHobby = {
      // id: casual.uuid,
      // title: casual.title,
      id: newId,
      title: `Hobby ${newId}`,
    };

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  console.log("Hobby list: ", hobbyList);
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

  return (
    <div>
      <h1>REDUX HOOKS - Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>

      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
};
