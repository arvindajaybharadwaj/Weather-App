export default function SearchBar() {
    return(
        <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar"></input>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
}