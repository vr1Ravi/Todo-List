import { AppContextProvider } from "./context/AppContextProvider";
import Todo from "./pages/Todo";
function App() {
  return (
    <div className=" max-w-[750px] mx-auto pt-[40px]">
      <AppContextProvider>
        <Todo />
      </AppContextProvider>
    </div>
  );
}

export default App;
