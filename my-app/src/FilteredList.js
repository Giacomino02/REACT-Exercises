import React, { useMemo } from 'react';

export function FilteredList({usersArray}) {

	const filteredList = useMemo(
		() => {
			return usersArray.filter((user) => user.age > 18);
		},
		[ usersArray ]
	);

	const usersList = filteredList.map((user, index) => (
		<li key={user.name + index}>
			{user.name}, {user.age}
		</li>
	));

	return <ul>{usersList}</ul>;
}