// import react from "https://cdn.skypack.dev/react";
// import reactDom from "https://cdn.skypack.dev/react-dom";
// import next from "https://cdn.skypack.dev/next";
import Nav from "../components/Nav";
import List from "../components/List";
import Tags from "../components/Tags";

function Landing() {
    return (
        <>
            <Nav />
            <div id="wrapper">
                <Tags />
                <List />
            </div>
        </>
    );
}

export default Landing;
