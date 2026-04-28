
import './App.css'
import UseRef1 from './UseRef1'
import DOMvalue from './Useref2'
import HeavyCalculation from './UseMemo'
import Callback from './UseCallback'
import Parent from './Parent'
import LazyParent from './LazyParent'
import Fetch from './Fetch'
function App() {
  

  return (
    <>
      <div>
      <UseRef1/>
      </div>

      <br></br>
      <br></br>
      <div>
        <DOMvalue/>
      </div>
      <>
      <HeavyCalculation/>
      </>
      <>
      <Callback/>
      </>
      <>
      <Parent/>
      </>
      <>
      <LazyParent/>
      </>
      <>
      <Fetch/>
      </>
    </>
  )
}

export default App
