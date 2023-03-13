import "./search.css"
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";

export default function Searchbar({  searchValue }){
    const[countryName,setCountryName]= useState('')
     function getName(){
        searchValue(countryName)
   }

    return(
        <>

        <div className="search">
            <div className="scontainer">
                <input type="text" placeholder="Search Country" onChange={(e)=>setCountryName(e.target.value)}/>
                <SearchIcon className="s-icon" onClick={getName} />
            </div>
        </div>
            {/*{countryName}*/}
        </>

    )
}