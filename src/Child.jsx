
import React from "react";
function Child({name}){
console.log('child rendered')
return <h1>hi {name}</h1>
}

export default React.memo(Child)