import  {lazy,Suspense} from 'react'
// import React from 'react'
// import About from './About'
 const About= lazy(()=> import('./About'))
export default  function LazyParent(){
 return (
    <>
    <h1>My parent component</h1>
    
    <Suspense fallback={<p>...Loading</p>}>
        <About/>
    </Suspense>
    </>

 )
}
