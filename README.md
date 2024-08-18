# OTPInput Component

`OTPInput` is a customizable React component that allows users to input OTP (One Time Password) codes in a user-friendly manner. The component handles multiple input fields for each digit of the OTP and provides a seamless experience for users.

## Props

The OTPInput component accepts the following props:

1. `length: number` -
   - **Description:** Specifies the number of input fields to display. Each field corresponds to one digit of the OTP.
   - **Type:** number
   - **Required:** true
2. `onChange: (otp: string) => void` -
   - **Description:** A callback function that is triggered whenever the user changes the value of the OTP input fields. The function receives the current OTP as a string.
   - **Type:** (otp: string) => void
   - **Required:** true

## Example usage

```typescript
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
```

## Installation

- Pull this branch into your local system.
- Make sure you have Node installed (preferrably Node v18.17.1).
- Navigate to the project directory and run
  ```
  npm install
  ```
- Once all the dependencies have been installed, run the following command to start the dev server.
  ```
  npm run dev
  ```
