import { useState, useEffect } from 'react'
import { ChevronsDown, Github } from 'lucide-react'
import { AppView, Text, Input, Content } from './styles/App'
import Slider from '@mui/material/Slider';

export default function App() {
    const [results, setResults] = useState("0")
    const [primaryInput, setPrimaryInput] = useState("154")
    const [secondaryInput, setSecondaryInput] = useState("158")
    const [bpmBase, setBaseBpm] = useState(150)

    useEffect(() => {
        setResults((((primaryInput / secondaryInput) - 1) * 100).toFixed(2))
    }, [primaryInput, secondaryInput])

    return (
        <AppView>
            <img src="https://undergroundsound.eu/wp-content/uploads/2021/08/MO2.png" style={{
                position: 'absolute',
                zIndex: 1,
            }} />
            <Content className='glass'>
                <Text color={'#ff0548'} fontSize="64px" fontWeight={'800'}>BPM ±6</Text>
                <form>
                    <div className='label'>
                        <label>CURRENT TRACK:</label>
                        <Input
                            pattern="[0-9]*"
                            placeholder="154"
                            value={primaryInput}
                            onChange={(e) => setPrimaryInput(e.target.value)}
                            type="number"
                        // max={200}
                        />
                        <Slider
                            aria-label="Small steps"
                            defaultValue={bpmBase}
                            getAriaValueText={(value) => value}
                            onChangeCommitted={(e, v) => setPrimaryInput(v)}
                            step={1}
                            marks
                            min={bpmBase - 10}
                            max={bpmBase + 10}
                            valueLabelDisplay="auto"
                        />
                    </div>

                    <ChevronsDown size={36} strokeWidth={3} color='#fff' />

                    <div className='label'>
                        <label>OTHER TRACK:</label>
                        <Input
                            pattern="[0-9]*"
                            placeholder="154"
                            value={secondaryInput}
                            onChange={(e) => setSecondaryInput(e.target.value)}
                            type="number"
                            max={200}
                        />
                        <Slider
                            aria-label="Small steps"
                            defaultValue={150}
                            getAriaValueText={(value) => value}
                            onChangeCommitted={(e, value) => setSecondaryInput(value)}
                            step={1}
                            marks
                            min={bpmBase - 10}
                            max={bpmBase + 10}
                            valueLabelDisplay="auto"
                        />
                    </div>
                </form>
                <Text color={results < 0 ? "#ff0548" : "#00D100"} fontSize="64px" fontWeight={'800'}>{results}</Text>
            </Content>
            <Content className='glass' style={{flexDirection:"row"}}>
                <div className='flex gap-2 justify-between flex-row py-1 rounded-md'>
                    <Github size={32} color='#fff' />
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-md'>Source code</span>
                    <button
                        className='px-6 rounded-2xl bg-blue-600'
                        onClick={() => window.location.replace('https://github.com/joaotadiello/bpm-wiserespurces.store')}>GET</button>
                </div>
            </Content>
        </AppView>
    );
}

