import Cart from "./components/Cart/Cart"
import Registration from "./components/Registration/RegistrationDialog"
import ProductsPage from "./components/Products/ProductsPage"
import { Provider } from 'react-redux'
import { store } from "./store/store"
import SidePanel from "./components/SidePanel/SidePanel"
import Settings from "./components/Settings/Settings"
import CatagorriesList from "./components/Products/CatagoriesList"




function App() {

  return (
        <Provider store={store}>
          <aside>
            <SidePanel/>
          </aside>
          <main className="flex h-screen relative overflow-hidden">
            <Cart/>
            <Registration/>
            <ProductsPage/>
            <CatagorriesList/>
            <Settings/>
            
          </main>
        </Provider>
  )
}

export default App
