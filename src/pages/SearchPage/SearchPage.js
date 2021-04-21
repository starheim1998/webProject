import {useEffect, useState} from "react";

export default function SearchPage(){

    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearch(getSearch)
    }, [])

    function getSearch(){
        const params = new URLSearchParams(window.location.search);
        return params.get('q');

    }

    return (
        <>
            <h1>Searched for: {search}</h1>
        </>
    )
}