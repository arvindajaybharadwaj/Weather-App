import Heading from "./Heading";
import SearchBar from "./SearchBar";

export default function HeadingContainer() {
    return(
        <div className="heading-container">
            <SearchBar />
            <Heading />
        </div>
    );
}