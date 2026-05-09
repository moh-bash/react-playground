export default function resultReducer(state, action) {
    const type = action.type;
    if (type === "SUM") {
        const {num1, num2} = action.payload;
        return Number(num1) + Number(num2);
    }else if (type === "SUB") {
        const {num1, num2} = action.payload;
        return num1 - num2;
    }else if (type === "MULT") {
        const {num1, num2} = action.payload;
        return num1 * num2;
    }else if (type === "DIV") {
        const {num1, num2} = action.payload;
        return num1 / num2;
    }
}