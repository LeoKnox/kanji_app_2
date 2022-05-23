const About = () => {
    let paragraphOne = 
    <div className="about">
        <h1 className="answer">About this site</h1>
        <p>
        Creating a page to learn Japanese Kanji. I
        set up a page to select the grade of Kanji
        of you want.
        </p>

        <p>
        Once grade of Kanji is selected user will
        see a defination and select the correct
        Kanji.
        </p>

        <p>
        Pronunciation and reading of Kanji is shown.
        User then is shown a new defination and must
        select a new Kanji.
        </p>

        <p>
        Technologies used are MySQL for the database. 
        Retreiving the grade or grades of Kanji available 
        to select. Once appropriate grades are selected. The
        proper Kanji are downloaded to a react front-end.
        </p>

        <p>
        Random Kanji are selected and an answer is selected
        from the those Kanji. It displays the randomly selected
        Kanji and when user selects correct Kanji is displays
        a new set of Kanji.
        </p>

        <p>
            Future plans include user login to store kanji you
            want to continue to practice. This will use CRUD
            functionality as well as a one-to-many relationship
            between user and Kanji.
        </p>
    </div>;

    return (
        <>
        {paragraphOne}
        </>
    )
}

export default About;