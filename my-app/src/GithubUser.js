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


export function HookGithubUser() {
    const { data, loading, error, onInputChange, onUserFetch } = useGithubUser();

	return (
		<div>
			<div>
				<label>
					Search for GitHub users:
					<input placeholder="Search" onChange={onInputChange} />
					<button onClick={onUserFetch}>add</button>
				</label>
			</div>
			{loading && (
				<div>
					<p>
						<i>Loading</i>
					</p>
				</div>
			)}
			{error && (
				<div>
					<p>User not found!</p>
				</div>
			)}
			{data && (
				<div>
					<img src={data.avatar_url} alt="user" className="profile-avatar" />
					<h1>{data.name}</h1>
					<p>{data.html_url}</p>
				</div>
			)}
		</div>
	);

}
