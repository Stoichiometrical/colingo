import "./main.css"
import Navigation from "../components/navigation/Navigation";
import Searchbar from "../components/searchbar/Searchbar";
import Map from "../components/map/Map";
import CountryFacts from "../components/country-fact/CountryFacts";
import Piechart from "../components/piechart/PieChart";
import {useState} from "react";
import Map2 from "../components/map/Map2";


export default function Services(props){
    const[details,setDetails]= useState('')
     function  searchInput(value){
        setDetails(value)
    }



    return(
        <>
            <div className="services">
                <Navigation/>
                <Searchbar searchValue={searchInput} />
                {details ? <Map2 countryName={details}/> : <Map/> }
                <CountryFacts country={details}/>
                <Piechart country={details} />

            </div>
        </>
    )
}