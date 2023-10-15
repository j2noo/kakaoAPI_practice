import Router from "./Router";

function App() {
  //console.log(process.env.REACT_APP_KAKAO_JS_SDK_KEY); //CRA
  //console.log(import.meta.env.VITE_KAKAO_JS_SDK_KEY); //VITE
  return (
    <div>
      {/* <KakaoLogin /> */}
      <Router />
    </div>
  );
}

export default App;
