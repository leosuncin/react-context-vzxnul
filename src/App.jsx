import { useGlobalContext } from './AppProvider';

function App() {
  const { userDispatch, userInfo } = useGlobalContext();

  return (
    <>
      <pre>{JSON.stringify(userInfo)}</pre>
      <button onClick={() => userDispatch({})}>click me</button>
    </>
  );
}

export default App;
