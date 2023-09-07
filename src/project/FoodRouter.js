import { BrowserRouter,Routes,Route } from "react-router-dom";
import NextPage from "./NextPage";
import Footer from "./Footer";


export default function FoodRouter(){
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Footer/>}/> 

                
                <Route path="/NextPage" element={<NextPage/>}>

                <Route path=':foodId' element={<NextPage/>}/>


                </Route> 

                {/* <Route path='*' element={<Footer/>}/> */}

                

            </Routes>
        </BrowserRouter>
    )
    
}
