const useApp = () => {

    function keyupHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Backspace" || event.key === "Delete") {
            const inputId: number = Number((event.target as HTMLInputElement).id);
            focusPreviousInputField(inputId);
        }

        if (Number(event.key) && Number(event.key) >= 0 && Number(event.key) <= 9) {
            const inputId: number = Number((event.target as HTMLInputElement).id);
            (document.getElementById(String(inputId)) as HTMLInputElement)!.value = (event.target as HTMLInputElement).value.slice(0, 1);
            focusNextInputField(inputId);
        }
    }

    function focusNextInputField(inputId: number) {
        const lastInputId: number = 6;
        if (inputId !== lastInputId) {
            document.getElementById(String(inputId + 1))!.focus();
        }
    }

    function focusPreviousInputField(inputId: number) {
        const firstInputId: number = 1;
        if (inputId !== firstInputId) {
            (document.getElementById(String(inputId - 1)) as HTMLInputElement)!.focus();
            (document.getElementById(String(inputId - 1)) as HTMLInputElement)!.select();
        }
    }

    function verifyButtonClickHandler() {
        let otp = "";
        const inputFields = document.querySelectorAll("input");
        for (let i = 0; i < inputFields.length; i++) {
            otp += inputFields[i].value;
        }

        console.log(otp);
    }


    return {
        keyupHandler,
        verifyButtonClickHandler
    };
};

export default useApp;