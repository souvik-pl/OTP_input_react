import { useRef } from "react";
import { OTPInputProps } from "./common/common.type";
import styles from "./OTPInput.module.css";

function OTPInput(props: OTPInputProps) {
  const { length: otpLength, onChange } = props;
  const inputRefs = useRef<HTMLInputElement[] | null[]>(new Array(otpLength).fill(null));

  function focusAndSelectInput(inputIndex: number) {
    inputRefs.current[inputIndex]?.focus();
    inputRefs.current[inputIndex]?.select();
  }

  function clickHandler(event: React.MouseEvent, index: number) {
    inputRefs.current[index]?.select();
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const currentValue = event.target.value.slice(0, 1);
    event.target.value = currentValue;

    if (currentValue !== "") {
      focusAndSelectInput(index + 1);
    } else {
      focusAndSelectInput(index - 1);
    }

    assembleOTP();
  }

  function assembleOTP() {
    const isOTPValid: boolean = inputRefs.current.every((ele) => ele?.value !== "");
    if (!isOTPValid) {
      onChange("");
    } else {
      onChange(inputRefs.current.map((ele) => ele?.value).join(""));
    }
  }

  return (
    <div className={styles.container}>
      {new Array(otpLength).fill(null).map((_, index) => (
        <input
          key={index}
          className={styles.input}
          ref={(el) => (inputRefs.current[index] = el)}
          type="number"
          onClick={(event) => clickHandler(event, index)}
          onChange={(event) => changeHandler(event, index)}
        />
      ))}
    </div>
  );
}

export default OTPInput;
