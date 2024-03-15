import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Box, Button, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState, useMemo, useCallback } from 'react';

import InputCalc from '../../components/InputCalc';
import Calculator from '../../components/Calculator';
import History from '../../components/History';
import Menu from '../../components/Menu';
import ClickCalc from '../../components/ClickCalc';
import Converter from '../../components/Converter';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();

    const [number, setNumber] = useState('0');
    const [result, setResult] = useState('');
    const [calcType, setCalcType] = useState('ClickCalc');
    const [history, setHistory] = useState([]);
    const [mode, setMode] = useState<string>('Calculator');

    // const historystate = useSelector(historyStateSelector);

    const applyExpression = useCallback(
        (countedNumber: string) => {
            setNumber(countedNumber);
            setResult(eval(number));
        },
        [number]
    );

    const updateHistory = useCallback(
        (calcResult: string) => {
            if (history.length > 6) {
                history.shift();
            }
            setHistory(history.concat(eval(calcResult)));
        },
        [history]
    );

    const calcTypeChange = useCallback(() => {
        calcType === 'ClickCalc'
            ? setCalcType('InputCalc')
            : setCalcType('ClickCalc');
        // setCalcType((previous: String) => previous === 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc'))
    }, [calcType]);

    let application;
    let calculator;

    switch (calcType) {
        case 'ClickCalc':
            // useContext почитать
            calculator = (
                <ClickCalc
                    number={number}
                    setNumber={setNumber}
                    result={result}
                    setResult={setResult}
                    updateHistory={updateHistory}
                    applyExpression={applyExpression}
                />
            );
            break;
        case 'InputCalc':
            calculator = <InputCalc updateHistory={updateHistory} />;
            break;
        default:
            calculator = (
                <ClickCalc
                    number={number}
                    setNumber={setNumber}
                    result={result}
                    setResult={setResult}
                    updateHistory={updateHistory}
                    applyExpression={applyExpression}
                />
            );
            break;
    }

    switch (mode) {
        case 'Calculator':
            application = (
                <Calculator
                    calculator={calculator}
                    calcTypeChange={calcTypeChange}
                    history={history}
                />
            );
            break;
        case 'Converter':
            application = <Converter />;
            break;
        default:
            application = (
                <Calculator
                    calculator={calculator}
                    calcTypeChange={calcTypeChange}
                    history={history}
                />
            );
            break;
    }

    return (
        <ErrorBoundary>
            <div className="App">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    h="100vh"
                >
                    {/* <Box display='flex'>
                    { historystate.map((e:any, index: number) => {return <Button key={ index } color='red' size='xs'>{e}</Button>} ) }
                </Box> */}
                    <Box display="flex" h="90px">
                        {/*<HamburgerIcon w='45px' h='45px' p='5px' m='5px' borderRadius='5px'/>*/}
                        <Menu setMode={setMode} />
                    </Box>
                    <Box display="flex" flex-direction="row" m="10px">
                        <History data={history} />
                        History
                        {/*<Routes>*/}
                        {/*    <Route path="/" element={<Calculator calculator={calculator} calcTypeChange={calcTypeChange} history={history} />} />*/}
                        {/*    <Route path="converter" element={<Converter />} />*/}
                        {/*</Routes>*/}
                    </Box>
                    {application}
                </Box>
            </div>
        </ErrorBoundary>
    );
};

export default Home;
