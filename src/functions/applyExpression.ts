type Props = {
    number: any;
    setNumber: any;
    setResult: any;
    countedNumber: string;
};
const applyExpression = ({
    number,
    setNumber,
    setResult,
    countedNumber,
}: Props): void => {
    setNumber(countedNumber);
    setResult(eval(number));
};

export default applyExpression;
