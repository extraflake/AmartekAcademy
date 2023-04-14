import "bootstrap/dist/css/bootstrap.min.css";

export function Button(props){
    let { mode, id, onclick, disable, ...rest} = props;
    
    return(
        <button 
            type="button"
            className={mode}
            id={id}
            onClick={onclick}
            style={{...rest}}
            disabled={disable}
        >
            {props.children}
        </button>
    )
}