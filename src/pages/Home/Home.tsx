import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Box } from '@chakra-ui/react';
import { useState, useMemo, useCallback } from 'react';

import InputCalc from '../../components/InputCalc';
import Calculator from '../../components/Calculator';
import History from '../../components/History';
import ClickCalc from '../../components/ClickCalc';
import Converter from '../../components/Converter';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import { historyStateSelector } from '@store/calculator/selector';
import MenuBut from '@components/MenuButton';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import ThemeButton from '@components/ThemeButton';

const Home = () => {
    const dispatch = useDispatch();

    // где редакс дядя витя
    const [number, setNumber] = useState('0'); // используется только в калькуляторе с кнопками и должно внутри компонента или в редаксе
    const [result, setResult] = useState('');
    const [calcType, setCalcType] = useState('ClickCalc'); // вынести логику в роутер и пускай он разруливает
    const [history, setHistory] = useState([]); // две истории, и в редаксе и тут, глаз режет. Если они разные для разных калькуляторов, прячь внутри самих калькуляторов или редаксе
    const [mode, setMode] = useState<string>('Calculator');
    //colorMode
    const { colorMode, toggleColorMode } = useColorMode();
    const navBg = useColorModeValue('white', 'blackAlpha.200');

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

    return (
        <ErrorBoundary>
            <Box bg={navBg} className="App">
                <ThemeButton
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    h="100vh"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                    >
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
                                    <Calculator history={history}>
                                        <ClickCalc
                                            number={number}
                                            setNumber={setNumber}
                                            result={result}
                                            setResult={setResult}
                                            updateHistory={updateHistory}
                                            applyExpression={applyExpression}
                                        />
                                    </Calculator>
                                }
                            />
                            <Route path="converter" element={<Converter />} />
                            <Route
                                path="calculator"
                                element={
                                    <Calculator history={history}>
                                        <ClickCalc
                                            number={number}
                                            setNumber={setNumber}
                                            result={result}
                                            setResult={setResult}
                                            updateHistory={updateHistory}
                                            applyExpression={applyExpression}
                                        />
                                    </Calculator>
                                }
                            ></Route>
                            <Route
                                path="/calculator/input"
                                element={
                                    <Calculator history={history}>
                                        <InputCalc
                                            updateHistory={updateHistory}
                                        />
                                    </Calculator>
                                }
                            />
                            <Route
                                path="/calculator/type"
                                element={
                                    <Calculator history={history}>
                                        <ClickCalc
                                            number={number}
                                            setNumber={setNumber}
                                            result={result}
                                            setResult={setResult}
                                            updateHistory={updateHistory}
                                            applyExpression={applyExpression}
                                        />
                                    </Calculator>
                                }
                            />
                        </Routes>
                    </Box>
                </Box>
            </Box>
        </ErrorBoundary>
    );
};

export default Home;
