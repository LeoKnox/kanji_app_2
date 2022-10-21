const Test = (peas) => {
    console.log("test"+peas.peas);
    console.log( peas.peas[0] ? console.log("true") : console.log("false"));
    return (
        <h3>test component {peas.peas[0]}</h3>
    )
}

export default Test;