import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./piechart.css"
import {useEffect, useState} from "react";
import Button from "../button/Button";
import {Link} from "react-router-dom";

const COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#00796B",
    "#9C27B0",
    "#FF9800",
];



const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                boxWidth: 10,
                font: {
                    color: 'white',
                },
            },
            backgroundColor: 'white',
            padding: 2,
            borderRadius: 10,
            align: 'end',
            offset: 10,
        },},
    layout: {
        padding: {
            left: 0,
            right:140,
            top: 10,
            bottom: 0,
        },
        margin :{
            left: 1,
            // right: 200,
            top: 0,
            bottom: 0,
        }
    },
};

const header = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
        'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
};

export default function Piechart({country})  {
    const[transport,setTransport] = useState(0)
    const[accomodation,setAccomodation] = useState(0)
    const[food,setFood] = useState(0)
    const[clothing,setClothing] = useState(0)
    const data = {
        labels: ["Food", "Transport", "Accommodation", "Clothes"],
        datasets: [
            {
                data: [food, transport, accomodation, clothing],
                backgroundColor: COLORS,
                borderWidth: 1,
                width: 200
            },
        ],
    };
    useEffect( ()=>{
        async function getDetails(){
            let endpoint = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=Zimbabwe`

               if(country){
                   endpoint = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country}`
               }
            let response =  await fetch(endpoint,header);
            let dataObject = await response.json();
            //transport here assumes that the person uses each mode for at least 10 days of the 30ddays in a month so we multiply by 10
            let transport=  Number(dataObject["prices"][47]["usd"]["avg"])*10 + Number(dataObject["prices"][48]["usd"]["avg"])*10 + Number(dataObject["prices"][49]["usd"]["avg"])*10
            let accomodation= Number(dataObject["prices"][0]["usd"]["avg"])
            let clothing= Number(dataObject["prices"][5]["usd"]["avg"]) + Number(dataObject["prices"][6]["usd"]["avg"]) + Number(dataObject["prices"][7]["usd"]["avg"])
            //here food assumes that the person does shopping at least once a week, so thats 4 times a month for basic goods
            let food = Number(dataObject["prices"][18]["usd"]["avg"])*4  + Number(dataObject["prices"][19]["usd"]["avg"])*4 + Number(dataObject["prices"][20]["usd"]["avg"])*4 + Number(dataObject["prices"][21]["usd"]["avg"])*4
            setFood(food)
            setTransport(transport)
            setAccomodation(accomodation)
            setClothing(clothing)




        } getDetails();},[])

    if (!country) {
        return <div style={{ display:"flex",justifyContent: "center",flexDirection:"column"}}>
            <h2>WAITING FOR SEARCH TO DISPLAY PIE CHART.....</h2>
            <Link to="/service" style={{marginLeft:"40%"}}><Button text="COMPARE COUNTRIES" /></Link>
        </div>;
    }


    return(
        <>
            <div className="pie">
                <div className="text">DISTRIBUTION OF EXPENSES IN CITY</div>
                <div style={{ width: '40%', height: 'auto' }}>
                    <Pie data={data} options={options} type={Chart}  />
                </div>

            </div>

        </>
    )
};

// Piechart.defaultProps = {
//     country : "Zimbabwe"
// }

