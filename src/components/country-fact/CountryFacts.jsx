import './facts.css'
import FlagIcon from '@mui/icons-material/Flag';
import {useEffect, useState} from "react";


export default function CountryFacts({ country }){

    const[details,setDetails] = useState(null)

    useEffect(() => {
        (async () => {
            let apiEndpoint = `https://restcountries.com/v2/name/Zimbabwe`;
            if (country) {
                apiEndpoint = `https://restcountries.com/v2/name/${country}`;
            }
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            setDetails(data[0]);
        })();
    }, [country]);

    if (!details) {
        return <p>FETCHING DETAILS.....</p>;
    }

    return(
        <div className="facts">
        <div className="flag">
            <img src={details.flag} style={{width :"58px",height :"50px"}} alt="Photo"/>
            <div className="country">{details.name}</div>
        </div>
            <div className="f-container">
                <div className="facts-sect1">
                    <ul className="c-facts">
                        <li className="fact-item"> <b>Capital City</b> : {details.capital}</li>
                        <li className="fact-item"><b>Latitude</b> : {details.latlng[0]}</li>
                        <li className="fact-item"> <b>Longitude</b> : {details.latlng[1]} </li>
                        <li className="fact-item"><b>Population</b> : {details.population} </li>
                    </ul>
                </div>
                <div className="facts-sect2">
                    <ul className="c-facts">
                        <li className="fact-item">{details.name}  is {details.subregion} </li>
                        <li className="fact-item"> Its native name is {details.nativeName}</li>
                        <li className="fact-item"> Languages spoken are {details.languages.map(language => language.name).join(',')} </li>
                        <li className="fact-item">Numeric code of {details.name} is {details.numericCode} </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}