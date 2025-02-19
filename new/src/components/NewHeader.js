import React from "react";
import './Header.css'
const NewHeader = () =>{
    return (
    <div>
    <section>
    <h1 className="a112345">PETSHOP</h1>
    <div className="a1">
        <a href="#accessories">accessories</a>
        <a href ="#belts">belts</a>
        <a href="#cages">cages</a>
        <a href="others">others</a>
    </div>
    
    <g className="lab">
        <img src='https://th.bing.com/th/id/OIP.DjGNgtOkXLv07WAU-f97iAHaFj?rs=1&pid=ImgDetMain' alt='dog'/>
    </g>
    <section >
    <div className="goods">
    <div>
    <h1>feratured goods</h1>
        <h2>dog collar</h2>
        <p>please take a look at out new ,<br />extended offer.<br/>$40.00</p>
        <button>add to cart</button>

    </div>
        <div >
            <g style={{display:"flex",width:"50%",height:"50%"}}>
                <img src='https://th.bing.com/th/id/OIP.eUEZDk3O0er8jOI09rbfOAHaHa?rs=1&pid=ImgDetMain' alt='dog belt' />
            </g>
        </div>
        </div>

        <div className="overall">
        <div className="padi">
        <img src='https://images-na.ssl-images-amazon.com/images/I/91XftiXpApL._AC_SY879_.jpg' alt='image1' />
       
        <p>Natural Balance L.I.D.<br/>sweet potato & venison <br/>$190.00</p>
        <button>add to cart</button>   
        </div>
        <div className="padi1">
            <img src='https://dogfood.guide/wp-content/uploads/2018/12/best-dry-dog-food-1.jpg' alt='dog dry food'/>
            <p>Natural Balance L.I.D.<br/>sweet POtato & venison <br/>$190.00</p>
            <button>add to cart</button>
        </div>
        <div className="padi2">
            <img src='https://cdn.shopify.com/s/files/1/1149/5008/products/TopLifeGoatMilkforDog200ml.png?v=1594906340' alt='milk' />
            <p>Blue Buffaio chicken &<br />Brown Rice<br/>$190.00</p>
            <button>add to cart</button>
        </div>
        </div>
        <div className="overal1">
            <div className="dog">
                  <img src="https://th.bing.com/th/id/OIP.Z1-gZbJ1tFGTTRe7_kFhIwHaHa?rs=1&pid=ImgDetMain" 
                   alt="offer"/>
                 <p>Natural Balance <br/>L.I.D<br/>
                  <span style={{ textDecoration: "line-through" }}>$122.00</span><br/>
                  $110.00
                 </p>
                 <button>add to cart</button>
            </div>
            <div className="dog1"> 
                <img src="https://petshopindia.com/image/cache/catalog/ON%20SALE/DOG%20ON%20SALE-500x450.jpg" alt ='offerimage'/>
                <p>Blue Buffaio chicken & <br/> Brown Rice <br/>
                <span style={{textDecoration:"line-through"}}>$122.00</span><br/>
                $110.00
                </p>
                <button>add to cart</button>
            </div>
            <div className="dog2">
                <h1>best offer</h1>
                <img src="https://th.bing.com/th/id/OIP.YBQ6lo8sckP8g1sv0MqHOQAAAA?rs=1&pid=ImgDetMain" alt='child with dog' />
            </div>
        </div>
        <div className="overall2">
            <div className="dog3">
                <img src="https://th.bing.com/th/id/OIP.Wzh2FZ_Uiod6LeMjreCmBAAAAA?rs=1&pid=ImgDetMain" alt="dog food" />
                <h1>dog treats</h1>

                <p>Pellentesque vitaeLorem ipsum dol amet,<br/> consectetur adipiscing elit.<br/>
                <span>MRP:$86.00</span><br/>OUR Price :$40.00</p>
                <button>add to cart</button>
            </div>
            <div className="dog4">
            <img src="https://th.bing.com/th/id/OIP.mKAzTwlMZTdIcY2Sqov3xwAAAA?rs=1&pid=ImgDetMain" alt="milk" />
                <h1>Blue Buffalo</h1>
                <p>Pellentesque vitaeLorem ipsum dol amet, <br/>consectetur adipiscing elit.<br/>
                <span>MRP:$86.00</span><br/>OUR Price :$40.00</p>
                <button>add to cart</button>
            </div>
        </div>
        <div className="arrival">
            <h1>NEW ARRIVAL</h1>
            <p>As modern Manufacturing creates new goods, we are the first to offer them.the prices of<br/>
            many new goods fall after they have been first introduced on the market</p>
        </div>
    </section>
    <section className="overall4">
        <div>
            <h1>Dog Clothes</h1>
            <p>please take a look at our new<br/> extended offer.</p>
            <button>see products</button>
        </div>
        <div className="dog5">
            <img src="https://th.bing.com/th/id/OIP.THQ978Br4yh5QZ6oH4776AAAAA?rs=1&pid=ImgDetMain" alt="dog with dress" />
        </div>
    </section>






    {/* <p>
    hi badri you please take a minitue to share your experience?
    </p> */}
    <div>  
    </div>
    </section>
       
    </div> 
      
    )
}

export default NewHeader


