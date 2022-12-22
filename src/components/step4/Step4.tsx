import React, { useState } from 'react';

interface Step4Props {
    formData: FormData;
}

export const Step4: React.FC<Step4Props> = ({ formData }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);
    const formData2: any = JSON.parse(
        localStorage.getItem('formData-2') || '{}'
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            username === formData2.username &&
            password === formData2.password
        ) {
            setIsValid(true);
        } else {
            setError(
                'All of your base are belong to us, you are on the way to destruction'
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Submit</button>
            {!isValid && error && (
                <div className="error-container">
                    <img
                        src="https://i.pinimg.com/originals/04/64/b1/0464b173abf5bb4ea3189626df8d3e3a.gif"
                        alt="error gif"
                        className="error-gif"
                    />
                    <p>{error}</p>
                </div>
            )}
            {isValid && (
                <>
                    <h1>Confirm your information</h1>
                    {Object.keys(localStorage).map((key) => (
                        <p key={key}>
                            {key}: {localStorage[key]}
                        </p>
                    ))}
                </>
            )}
        </form>
    );
};
