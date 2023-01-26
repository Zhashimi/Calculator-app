import React from "react";
import className from 'classnames';


export default function Buttons({ numberKey, operationKey,children,...rest }) {
    const classes = className(
        rest.className,
        'border-2 border-slate-400 py-8 px-8 text-center',
        {
            'text-slate-900':numberKey,
            'bg-orange-400 text-white':operationKey

        }
        );   
        return (
            <button {...rest} className={classes}>
              {children}
            </button>
          );
    

}
