import React, { useMemo, useState } from 'react'
import {procesoPesado} from '../../helpers/procesoPesado';
import { useCouter } from '../../hooks/useCouter'
import './memorize.css'
export const MemoHook = () => {


    const { counter, increment } = useCouter(1000);
    const [show, setShow] = useState(true)

    const memoprocesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>Memo Hook</h1>
            <hr />
            <h3>Counter : { counter } </h3>

            <p>
                {
                    memoprocesoPesado
                }
            </p>
            <div
                className='form-group'
            >
                <button
                    className='btn btn-secondary'
                    onClick={increment}
                >
                    +1
                </button>

                <button
                    className='btn btn-danger'
                    onClick={()=>{
                        setShow(!show)
                    }}
                >
                    Show/Hide {JSON.stringify(show)}
                </button>
            </div>
        </div>
    )
}
