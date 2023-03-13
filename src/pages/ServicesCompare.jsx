import "./main.css"
import Navigation from "../components/navigation/Navigation";
import Button from "../components/button/Button";
import Chart from "../components/barchart/Barchart";
import {useState} from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";
import {useEffect} from "react";


export default function ServicesCompare(){
    const[country1,setCountry1]= useState(null)
    const[country2,setCountry2]= useState(null)
    const[countrydetails1,setCountrydetails1]= useState(null)
    const[countrydetails2,setCountrydetails2]= useState(null)
    const[transport,setTransport] = useState(0)
    const[accomodation,setAccomodation] = useState(0)
    const[food,setFood] = useState(0)
 ///Variables for second country
    const[transport2,setTransport2] = useState(0)
    const[accomodation2,setAccomodation2] = useState(0)
    const[food2,setFood2] = useState(0)

    const[show,setShow] = useState(false)

    const data = [
        { "expense" :"Accomodation","first_country":accomodation,"second_country":accomodation2},
        { "expense" :"Food","first_country":food,"second_country":food2},
        { "expense" :"Transportation","first_country":transport,"second_country":transport2}

    ];



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    };

    useEffect(() => {
        (async () => {
            let endpoint1 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=Zimbabwe`
            let endpoint2 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=Mauritius`

            if (country1 && country2) {
                endpoint1 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country1}`
                endpoint2 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country2}`
            }
            const response1 = await fetch(endpoint1,options);
            const response2 = await fetch(endpoint2,options);
            const data1 = await response1.json();
            const data2 = await response2.json();
            setCountrydetails1(data1[0])
            setCountrydetails2(data2[0])

            let transport=  Number(data1["prices"][47]["usd"]["avg"])*10 + Number(data1["prices"][48]["usd"]["avg"])*10 + Number(data1["prices"][49]["usd"]["avg"])*10
            let accomodation= Number(data1["prices"][0]["usd"]["avg"])
            let food = Number(data1["prices"][18]["usd"]["avg"])*4  + Number(data1["prices"][19]["usd"]["avg"])*4 + Number(data1["prices"][20]["usd"]["avg"])*4 + Number(data1["prices"][21]["usd"]["avg"])*4

            let transport2=  Number(data2["prices"][47]["usd"]["avg"])*10 + Number(data2["prices"][48]["usd"]["avg"])*10 + Number(data2["prices"][49]["usd"]["avg"])*10
            let accomodation2= Number(data2["prices"][0]["usd"]["avg"])
            let food2 = Number(data2["prices"][18]["usd"]["avg"])*4  + Number(data2["prices"][19]["usd"]["avg"])*4 + Number(data2["prices"][20]["usd"]["avg"])*4 + Number(data2["prices"][21]["usd"]["avg"])*4


            //Assign the values to thier variables
            setAccomodation(accomodation)
            setFood(food)
            setTransport(transport)

            setAccomodation2(accomodation2)
            setFood2(food2)
            setTransport2(transport2)



        })();
    }, []);


    return(
        <>
            <div className="services-comp">
                <Navigation/>
                <div className="main-text">THE COST OF LIVING</div>
                <div className="s-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales porta commodo.</div>
                <div className="compares">
                    <input type="text" className="f-input" placeholder="Search Country" onChange={(e)=>{ setCountry1(e.target.value)}}/>
                    <div onClick={()=>{setShow(true)}} style={{padding :"15px"}}><Button text='Compare' /></div>
                    <input type="text" className="f-input" placeholder="Search Country" onChange={(e)=>{ setCountry2(e.target.value)}}/>
                </div>
                <div className="f-section">
                    <div className="first-text">THE COST OF LIVING IN </div>
                    <div className="second-text">{country1} VS {country2}</div>
                    <div className="third-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales porta commodo. Cras consequat tortor vel elit<br/> eleifend ultricies. Ut quis urna fermentum, interdum nunc non, eleifend purus. </div>
                </div>
                <div className="btns">
                    <Button text="Transport"/>
                    <Button text="Accomodation"/>
                    <Button text="Food"/>
                </div>
                {show ? <div style={{ marginLeft :"26%",marginTop:"5%"}}>

                    <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="expense" />
                        <YAxis label={{ value : "Cost in USD", position:"left", angle:-90}} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="first_country" fill="#48ACF0" />
                        <Bar dataKey="second_country" fill="#3880D0" />
                    </BarChart>
                </div> : <div>WAITING FOR COMPARISONS.....</div> }



            </div>

        </>
    )
}