
function App() {
  return (
    <>
      <div className="bg-primary text-center row justify-content-center">
        <h1 className="bg-secondary  col-6  ">Hello WhatsAPP</h1>
        <h1 className="text-light">PROPS</h1>
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
*/
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
}




export default App;
