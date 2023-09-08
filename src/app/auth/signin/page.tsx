'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        currency: '',
    });

    const router = useRouter();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = res.json().then(response => {
                const createAccount = async () => {
                    const response1 = await fetch(
                        'http://localhost:8080/accounts',
                        {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                authorization: `bearer ${response.access_token}`,
                            },
                            body: JSON.stringify(formData),
                        }
                    );

                    if (response1.ok) {
                        router.push('http://localhost:3000/account');
                    }
                };
                createAccount();
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter your username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Enter your password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Enter your currency</label>
                    <input
                        type="text"
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
