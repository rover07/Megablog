import React from 'react'

function Select ({
   options,
    label,
    className,
    ...props},
    ref
    
){   
    
    const id=useId()

    
    
    return (
       <div>
        {
            label && <lable className='w-full' htmlFor={id}></lable>
        }
        <select {...props}
        id={id}
        ref={ref}  
        className= {`${className}`}
        >
            {
                options?.map((option)=>{
                    <option key={option} value={option}>
                        {option }
                    </option>
                })
            }

        </select>
       </div>
    )
}

export default React.forwardRef(Select) 
