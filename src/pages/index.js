const { useState } = require("react");

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [editButtonId, setEditButtonId] = useState();
  const [editInput, setEditInput] = useState("");

  const addTAsk = () => {
    const id = Math.floor(Math.random() * 100);
    if (inputValue == "") return;
    const newTask = {
      values: inputValue,
      id: id,
    };
    setLists([...lists, newTask]);
    setInputValue("");
  };

  const delTask = (idies) => {
    const mTask = lists.filter((list) => {
      return list.id !== idies;
    });
    setLists(mTask);
  };

  const doneTask = (id) => {
    const todoLists = lists.map((list) => {
      if (list.id === id) {
        list.isDone = true;
        setLists([...lists]);
      }
    });
    console.log(todoLists);
  };

  const okButton = (id) => {
    if (editButtonId == "") return;

    const editedLists = lists.map((list) => {
      return list.id == id ? { ...list, values: editInput } : list;
    });
    console.log(editedLists);
    setLists(editedLists);
    setEditButtonId(0);
    // if (editButtonId == "") return;
    // const nTask = {
    //   values: editButtonId,
    //   id: id,
    // };
    // setEditButtonId(...lists, nTask);
    // setEditInput("");
    // const edit = lists.map((listes) => {
    //   if (listes.id === id) {
    //     listes.values = editButtonId.values;
    //     setLists([...lists]);
    //   }
    // });
    // console.log(edit);
  };

  return (
    <div className="style">
      <div className="style2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button" onClick={() => addTAsk()}>
          add
        </button>
      </div>
      {lists.map((list, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "10px",
              backgroundColor: list.isDone ? "darkblue" : "darkred",
              borderRadius: "5px",
              width: "18vw",
              height: "6vh",
              color: "white",
            }}
          >
            {list.values}
            <div className="style5">
              <button
                className="button2"
                style={{}}
                onClick={() => delTask(list.id)}
              >
                delete
              </button>
              <button
                className="button3"
                onClick={() => setEditButtonId(list.id)}
              >
                edit
              </button>

              {editButtonId === list.id ? (
                <div className="bgStyle">
                  <input
                    className="inputStyle"
                    onChange={(e) => setEditInput(e.target.value)}
                  ></input>
                  <button className="button5" onClick={() => okButton(list.id)}>
                    ok
                  </button>
                </div>
              ) : null}
              <button className="button4" onClick={() => doneTask(list.id)}>
                done
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
