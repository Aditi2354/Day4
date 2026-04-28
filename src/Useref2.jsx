import { useRef } from "react";

export default  function DOMvalue(){
    const focuspoint = useRef(null)

    const onChangeHandling =()=>{
        focuspoint.current.value = 'My vision is to become Rich'
        focuspoint.current.focus()
    }

    return(
        <>
        <div>
            <button onClick={onChangeHandling}>Action</button>
        </div>
        <label>click on action button to focus and populate text area</label>
        <br></br>
        <textarea  ref={focuspoint}/>
        </>
    )
}