import "./btn.css"

export default function Button(props){
    return(
        <>
            <div className="btn-def">
                {props.text}
            </div>
        </>
    )
}