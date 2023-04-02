import SecondPg from "./components/SecondPg";
import Loader from "./components/Loader";
import $ from 'jquery';
import { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const onPageLoad = () => {
      setTimeout(() => {
        $("#content").fadeIn(1000)
        setLoading(false)
      }, 5500)
    }

    if (document.readyState === 'complete'){
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad)
    }
  },[])
  return (
    <div className="App">
      {
        loading?
          <Loader /> //works if loader is true else neeche wala
          :
          <>
          <SecondPg />
          </>
      }
    </div>
  );
}

export default App;
