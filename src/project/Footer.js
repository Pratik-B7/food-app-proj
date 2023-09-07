// import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'
import { useNavigate } from "react-router-dom";


import FoodItem from './FoodItem';


function Footer() {

    const navigate= useNavigate();


    const handleFoodClick=(food)=>{
        console.log(food);
        
    navigate("NextPage/"+ food.id)

    }
    return (


        <div className="container">
            <h4 className="text text-center p-2 m-2 ">Best Seller</h4>
            <div className="box-1 d-flex  ">
            {FoodItem.map((food)=>{

                return(
                    <div key={food.id} className="card-1 border rounded shadow p-3 m-3 " style={{ width: '18rem' }}>
                    <img src={food.images} className="card-img-top" alt="food img" />
                    <div className="card-body">
                        <h5 className="card-title">{food.name}</h5>
                        <p className="card-text">{food.description}</p>
                        <a  onClick={()=>handleFoodClick(food)} className="btn btn-primary">{food.btnText}</a>
                    </div>
                </div>
                )

            })}
                
                
            </div>
            <div className="box-2 p-2 m-2 ">
                <div className="contact p-4 ">
                    <ul> Contact Us
                        <li>Chandnani Tower, Vajirabad Market,SP Office Road, Nanded.</li>
                        <li>9855114466</li>
                        <li>KingFood@gmil.com</li>

                    </ul>

                </div>
            </div>
            <div className="footer">
               <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <div className='logo'>
                                <img src='/images/logo/kingfood.png' alt='logo'/>
                            </div>
                            <p>Rahul Colony, Taroda BK ,Nanded </p>
                            
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Menu Name</h5>
                            <ul>
                                <li className="menu-item"> 
                                    <a className="item-link" href="/">Biryani</a>
                                </li>
                                <li className="menu-item"> 
                                    <a className="item-link" href="/">Burger</a>
                                </li>
                                <li className="menu-item"> 
                                    <a className="item-link" href="/">Pizza</a>
                                </li>
                                <li className="menu-item"> 
                                    <a className="item-link" href="/">KFC Chicken</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Social Link</h5>
                            <div className="footer-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            </div>
                            <p><i className="fa-sharp fa-solid fa-phone-volume"></i> +919866475684</p>
                            <p><i className="fa-solid fa-envelope"></i> KingFood@gmail.com</p>
                        </div>
                    </div>
               </div>

            </div>

        </div>
        
    );
}
export default Footer;