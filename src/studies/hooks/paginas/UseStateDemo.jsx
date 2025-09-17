import { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0)

  const [cor, setCor] = useState("red")

  const [transparente, setTraparente] = useState(true)

  const [nome, setNome] = useState(" ")
  const [lista, setLista] = useState([])

  const addValor = () => {
    setCount(valor => valor + 1)
  }

  const removeValor = () => {
    setCount(valor => valor - 1)
  }

  const resetValor = () => {
    setCount(valor => valor * 0)
  }

  const mudarCor = () => {
    if (cor == "red"){
      setCor(coloracao => "green")
    } else{
    setCor(coloracao => "red")
    }
  }

  const esconderTexto = () => {
     setTraparente(text => !text)
  }

  const addNome = () => {
    setLista([...lista, nome])
    setNome(" ")
  }

  return (
    <>
    <h1>Contador usando useState: </h1>
    <p>contador: {count}</p>
    <button onClick={addValor}>adicinar</button>
    <button onClick={removeValor}>remove</button>
    <button onClick={resetValor}>reset</button>
    <div style={{color: cor}}>
      <h3>esse é o exemplo de cor</h3>
    </div>
    <button onClick={mudarCor}>cor</button>

    <button onClick={esconderTexto}>
      {transparente ? "esconder" : "mostrar"}
    </button>

    {transparente && <p>teste de exemplo</p>}

    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="digite um nome"/>
    <button onClick={addNome}>addNome</button>

       <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>    
  );
};

export default UseStateDemo;


// o use de useState está atrelado ao conceito de gerenciamento de estado (outro que tambem é: useContext)
// esse é o mais usado