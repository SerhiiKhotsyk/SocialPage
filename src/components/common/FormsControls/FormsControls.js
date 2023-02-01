import React from "react";
import style from './FormsControls.module.css';

// export const Textarea = ({input, meta, ...props}) => {

//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={style.formControl}>
//             <textarea {...input} {...props} className={`${style.formInput} ${hasError ? style.error : ''}`}/>

//             {hasError ? <span className={style.error}>{meta.error}</span> : undefined}
//         </div>
//     )
// }

const Element = (ComponentType) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl}>
            <ComponentType {...input} {...props} className={`${style.formInput} ${hasError ? style.error : ''}`}/>

            {hasError ? <span className={style.error}>{meta.error}</span> : undefined}
        </div>
    )
}

export const Input = Element('input');

export const Textarea = Element('textarea');