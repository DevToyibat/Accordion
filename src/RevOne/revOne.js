import React, {useState} from 'react';
import "./revOne.css";
import {BsFillXSquareFill} from "react-icons/bs";
import Moment from 'moment'; 
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";

import Naija from "../Img/naija.jpg";
import Canada from "../Img/canada.jpg";
import China from "../Img/china.jpg";
import Jamaica from "../Img/jamaica.jpg";
import Usa from "../Img/usa.jpg";

const RevOne = () => {

    const [data, setData] = useState([
    {
        id: 1,
        name: "Buhari",
        quote: "Nigeria my country is getting worse by the day",
        image: Naija,
        time: Date.now()
    },

    {
        id: 2,
        name: "Trudeau",
        quote: "Canad is currently the best place in the world for youths",
        image:Canada,
        time: Date.now()
    },

    {
        id: 3,
        name: "Xi",
        quote: "China is currently the most populated country in the world",
        image:China,
        time: Date.now()
    },

    {
        id: 4,
        name: "Andrew",
        quote: "Jamaica is a carribean country covered with oceans",
        image: Jamaica,
        time: Date.now()
    },

    {
        id: 5,
        name: "Biden",
        quote: "The United States where dreams come true",
        image: Usa,
        time: Date.now()
    },

    ])



    return (
        <div className = "container">
            <div className = "containerWrapper">

                 {data.map((user)=>{

                    return(


            <div className = "containerCard">
                 

                <div className = "containerCardRow">
                <BsFillXSquareFill/>

                {/* prototype for the image comtainer
                <img className = "containerCardImg" src = ""/> */}
                <img className = "containerCardImg" src= {user.image}/>
                 </div>
      
                 <ImQuotesLeft/>
                {/* prototype for comment section. the <p> tag issnt a must
                <div className = "comments"><p>Allah is the greatest. I love my dad and  my mum in heaven</p> </div> */}
                <div className = "comments"><p>{user.quote}</p></div>
                <ImQuotesRight/>

                {/* prototype for the name container
                <div className = "containerName">Taibat</div> */}
                <div className = "containerName">{user.name}</div>

                {/* prototype for the time container
                <div className = "containerTime">Time</div> */}
                <div className ="containerTime">{Moment(user.time).fromNow()}</div>
            </div>
        )
        }
        )}

          </div>

        </div>
    )
}

export default RevOne
