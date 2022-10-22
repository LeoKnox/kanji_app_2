const Test = (grades) => {
    console.log("test"+grades.grades);
    console.log( grades.grades[0] ? console.log("true") : console.log("false"));
    return (
        <h3>test component {grades.grades[0]}</h3>
    )
}

export default Test;