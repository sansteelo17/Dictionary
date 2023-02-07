import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainDictionary from "./components/Main/MainDictionary";
import MainNavigation from "./components/Main/MainNavigation";
import { DictionaryProvider } from "./store/dictionary-context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainNavigation />}>
      <Route index element={<MainDictionary />} />
    </Route>
  )
);

function App() {
  return (
    <DictionaryProvider>
      <RouterProvider router={router} />
    </DictionaryProvider>
  );
}

export default App;
