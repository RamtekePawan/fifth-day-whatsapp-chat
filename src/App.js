
function App() {
  return (
    <>
      <div className="bg-primary text-center row justify-content-center">
        <h1 className="bg-secondary  col-6  ">Hello WhatsAPP</h1>
        <h1 className="text-light">PROPOS</h1>
      </div>
      <div className="m-4">
        <MessageApp />
        
        <MessageApp name="Pawan" message="How are You?" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis, doloribus obcaecati non nobis autem amet asperiores iste. Velit, consequatur." />

        <MessageApp name='Pankaj' message="fine Bro!!" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis, doloribus obcaecati non nobis autem amet asperiores iste. Velit, consequatur." />

        <MessageApp name="Pradip " message="Chill Bro" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis, doloribus obcaecati non nobis autem amet asperiores iste. Velit, consequatur." />

        <MessageApp name="Nitesh " message="Nothing" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis, doloribus obcaecati non nobis autem amet asperiores iste. Velit, consequatur." />
      </div>
    </>

  )
}

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



export default App;
