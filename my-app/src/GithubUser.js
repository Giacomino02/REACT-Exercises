import React, { useEffect, useState } from "react";
// import axios from 'axios'

export function useGithubUser() {
	const [ inputValue, setInputValue ] = useState('');
	const [ fetchUser, setUserFetch ] = useState('');

	const [ loading, setLoading ] = useState(false);
	const [ data, setData ] = useState([]);
	const [ error, setError ] = useState(null);

	function handleInputChange(event) {
		const value = event.target.value;
		setInputValue(value);
	}

	function handleFetchUser() {
		setUserFetch(inputValue);
	}

	useEffect(
		() => {
			if (fetchUser !== '') {
				fetchGitHubUser(fetchUser);
			}
		},
		[ fetchUser ]
	);

	async function fetchGitHubUser(username) {
		setData([]);
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`https://api.github.com/users/${username}`);
			const json = await response.json();
			if (response.status !== 200) {
				throw new Error('User not found');
			}
			setData(json);
			console.log(json);
		} catch (error) {
			setError(error);
			console.log(error);
			setData(null);
		}
	}

	return {
		data: data,
		loading: loading,
		error: error,
		onInputChange: handleInputChange,
		onUserFetch: handleFetchUser
	};
}
export function GithubUser({username = 'Giacomino02'}) {
    const {data} = useGithubUser(username)
    return (
        <>
            <img src={data.avatar_url} alt='user' className="avatar-profile" />
            <h2>{data.name}</h2>
            <p>{data.html_url}</p>
        </>
    )

}
