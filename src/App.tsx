import OTPInput from "./OTPInput/OTPInput";

function App() {
  function changeHandler(otp: string) {
    console.log(otp);
  }

  return (
    <div>
      <OTPInput length={6} onChange={changeHandler} />
    </div>
  );
}

export default App;
