import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

function App() {

  const client = new ApolloClient({
    uri: `http://localhost:1337/graphql`,
    cache: new InMemoryCache()
  })
  return (
    <div  className="bg-gray-100 font-sans mx-0 my-7">
      <div className="text-lg mx-auto my-10 w-full max-w-2xl p-4 box-border">
           <Router>
            <ApolloProvider client={client}>
              <SiteHeader/>
                <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route path="/details/:id" element={<ReviewDetails/>}/>
                <Route path="/category/:id" element={<Category/>}/> 
                </Routes>
            </ApolloProvider>
           </Router>
      </div>
    </div>
  );
}

export default App;
