import { useState } from "react";

function App() {
  return (
    <>
      <div className="bg-primary text-center row justify-content-center">
        <h1 className="bg-secondary  col-6"> WhatsAPP</h1>
        <h1 className="text-light">Dynamic Message Input In React</h1>
      </div>
      <div className="m-4">
        <ListDemo />
      </div>
    </>

  )
}
/*
function MessageApp1(props) {
  return (
    <>
      <div className="alert alert-primary"><h2>
        Hii {props.name}
      </h2>
        <h3>{props.message}</h3>
        <p>{props.desc}</p>
      </div>
    </>
  );
}
function MessageApp({desc,name,message}) {
  return (
    <>
      <div className="alert alert-danger"><h2>
        Hi {name}
      </h2>
        <h3>{message}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
}

function ListDemo() {
  let data = "Hello World";
  let list = [];
  for (let index = 0; index < 10; index++) {
    list.push(data);
  }

  return (
    <>
      <div className="alert alert-danger">
        <h3>
          {data}
        </h3>
        <h4>{list.map((item) =>
        (<h5>{item}</h5>
        ))}</h4>
        <p></p>
      </div>
    </>
  );
}*/

function ListDemo() {
  let [list, setList] = useState(["Pune"]);

  let addItem = ()=>{
    let inputValue = document.querySelector("#id1").value;

    let newlist = [...list,inputValue];
    setList(newlist);

    document.querySelector("#id1").value = "";
  };

  return (
    <>
      <div className="alert alert-primary">
        <input type="text" className="form-control mb-2 p-2" id="id1" placeholder="Message..." />
        <button type="button" className="btn btn-dark mb-2 p-1 px-4" id="id1" onClick={addItem} >ADD-Message</button>
        <h4>
          {list.map((item)=>(
            <h5>{item}</h5>
          )) }
        </h4>
      </div>
    </>
  );
}




export default App;
