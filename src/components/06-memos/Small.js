import React ,{memo}from 'react';

export const Small = memo(({value}) => {
    
    console.log(':c')
    return (
        <small>
            {value}
        </small>
    )
}
);