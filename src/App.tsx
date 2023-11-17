import useApp from "./App.hook";
import styles from "./App.module.css";

function App() {

  const {
    keyupHandler,
    verifyButtonClickHandler
  } = useApp();

  return (
    <div className={styles.container}>
      <main>
        <label>Enter OTP</label>
        <section onKeyUp={keyupHandler}>
          <input id="1" type="number" />
          <input id="2" type="number" />
          <input id="3" type="number" />
          <input id="4" type="number" />
          <input id="5" type="number" />
          <input id="6" type="number" />
        </section>
        <button onClick={verifyButtonClickHandler}>Verify</button>
      </main>
    </div>
  )
}

export default App;
