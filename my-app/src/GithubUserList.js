import React, { useEffect, useState } from "react";
import { GithubUser, Githubuser, HookGithubUser } from "./GithubUser";

export function GithubUserList() {
    const [userArray, setUserArray] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(
        () => {
            console.log(userArray);
        },
        [userArray]
    );

    function removeItem(removedItem) {
        const filteredArray = userArray.filter((item) => item !== removedItem);
        setUserArray([...filteredArray]);
    }

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);
    }

    function handleUserAdd() {
        if (!userArray.includes(inputValue)) {
            setUserArray([...userArray, inputValue]);
        }
    }

    const userList = userArray.map((userItem, index) => (
        <div key={userItem + index}>
            <div>
                <HookGithubUser username={userItem} />
            </div>
            <div>
                <button onClick={() => removeItem(userItem)}>remove</button>
            </div>
        </div>
    ));

    return (
        <div>
            <div>
                <label>
                    Github users list: 
                    <div>
                        <input
                            name='username'
                            type={'search'}
                            autoComplete='true'
                            placeholder='Cerca'
                            onChange={handleInputChange}
                        />
                        <button onClick={handleUserAdd}>Aggiungi</button>
                    </div>
                </label>
            </div>
            <div>{userList}</div>
        </div>
    );
}