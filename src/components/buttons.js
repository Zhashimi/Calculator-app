import React from "react";
import className from 'classnames';


export default function Buttons({ numberKey, operationKey,children,...rest }) {
    const classes = className(
        rest.className,
        'border-2 border-slate-400 py-3 px-6 text-center rounded  mt-2 mb-1 ml-1 mr-1',
        {
            'text-slate-900 bg-slate-500 hover:bg-slate-200':numberKey,
            'bg-orange-400 text-white hover:bg-orange-200':operationKey
        }
        );   
        return (
            <button {...rest} className={classes}>
              {children}
            </button>
          );
    

}
