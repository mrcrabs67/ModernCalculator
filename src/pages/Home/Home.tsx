import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState, useMemo, useCallback } from 'react';

import InputCalc from '../../components/InputCalc';
import Calculator from '../../components/Calculator';
import History from '../../components/History';
import MenuComp from '@components/MenuComp';
import ClickCalc from '../../components/ClickCalc';
import Converter from '../../components/Converter';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import { historyStateSelector } from '@store/calculator/selector';
import MenuBut from "@components/MenuButton";

const Home = () => {
    const dispatch = useDispatch();

    // где редакс дядя витя
    const [number, setNumber] = useState('0'); // используется только в калькуляторе с кнопками и должно внутри компонента или в редаксе
    const [result, setResult] = useState('');
    const [calcType, setCalcType] = useState('ClickCalc'); // вынести логику в роутер и пускай он разруливает
    const [history, setHistory] = useState([]); // две истории, и в редаксе и тут, глаз режет. Если они разные для разных калькуляторов, прячь внутри самих калькуляторов или редаксе
    const [mode, setMode] = useState<string>('Calculator');

    const historyState = useSelector(historyStateSelector);

    // внутри компонента, резалт в редаксе
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
                // такс, что здесь происходит
                // ты не можешь менять значение в стейте
                // ты можешь лишь заменять стейт новым значением
                // так что если хочешь что-то сделать с history, делай новый массив и его модифицируй, а потом отправляем в стейт
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
        // почему не через превьюс стейт? чуток оптимизирует и уберет зависимость
    }, [calcType]);

    let application;
    let calculator: any; // плохой нейминг, калькулятор передаем в кульлутор ниже, сразу представляю рекурсию

    switch (
        calcType // заменить на роутер
    ) {
        case 'ClickCalc':
        default:
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
    }

    switch (mode) {
        case 'Converter':
            application = <Converter />;
            break;
        case 'Calculator':
        default: // вынес дефолт сюда же, но свитч мне не нравится
            application = (
                <Calculator
                    calculator={calculator} // плохой нейминг, можно передавать как children, а не через пропс, будет красивее
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
                    {
                        // <Box display="flex">
                        //     {history.map((e: any, index: number) => {
                        //         return (
                        //             <Button key={index} color="red" size="xs">
                        //                 {e}
                        //             </Button>
                        //         );
                        //     })}
                        // </Box>
                    }
                    <Box display="flex" h="90px">
                        <MenuBut></MenuBut>
                    </Box>
                    <Box display="flex" flex-direction="row" m="10px">
                        <Box display="flex" flexDirection="column">
                            History
                            <History data={history} />
                        </Box>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Calculator
                                        calculator={calculator}
                                        calcTypeChange={calcTypeChange}
                                        history={history}
                                    />
                                }
                            />
                            <Route path="converter" element={<Converter />} />
                            <Route
                                path="calculator"
                                element={
                                    <Calculator
                                        calculator={calculator}
                                        calcTypeChange={calcTypeChange}
                                        history={history}
                                    />
                                }
                            />
                        </Routes>
                    </Box>
                    {/*{application}*/}
                </Box>
            </div>
        </ErrorBoundary>
    );
};

export default Home;
