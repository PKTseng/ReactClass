import "./index.css"

const styleStatus = true
const style = {
  color: "red",
  fontSize: "50px",
}

function App() {
  return (
    <>
      <div className="App">
        <p style={style}>邏輯運算觸發</p>
        <p className={styleStatus ? "active" : ""}>測試樣式</p>
      </div>
    </>
  )
}

export default App
