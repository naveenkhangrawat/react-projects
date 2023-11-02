import React from 'react'
import { useState } from 'react'

function Button(props) {


    return (
        <>
            <div>
                <button className='border-2 rounded-xl py-1 px-4 text-zinc-700 font-medium' type="button" onClick={props.updateColor} style={{backgroundColor: props.btnColor}}>
                    {props.btnText}
                </button>
            </div>
        </>
    )
}

export default Button;
