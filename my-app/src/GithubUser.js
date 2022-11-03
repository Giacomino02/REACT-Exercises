import React, { useEffect, useState } from "react";
import axios from 'axios'

export function GithubUser({username = 'Giacomino02'}){
    const url = `https://api.github.com/users/${username}`
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get(url);
        console.log(response);
        setData(response.data)
    };

    useEffect(
        () => {
            getData();
        }, 
        [username]
    );
    return(
        <>
            <img src={data.avatar_url} alt = 'user' className="avatar-profile"/>
            <h2>{data.name}</h2>
            <a src={data.html_url}>link</a> 
        </>
    )
}