"use client";

import { useAuthContext } from "@/context/AuthContext";
import { handleChange } from "@/utils/handleChange";
import Image from "next/image";
import { useState } from "react";

export function LoginForm() {
    const { login, register, loginWithGoogle } = useAuthContext();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="login-form-cyber">

            <div className="input-group-cyber">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={(e) => handleChange({ e, setValues, values })}
                    required
                />
            </div>

            <div className="input-group-cyber">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={(e) => handleChange({ e, setValues, values })}
                    required
                />
            </div>

            <button
                type="submit"
                className="btn-cyber btn-blue"
                onClick={() => login(values.email, values.password)}
            >
                Login
            </button>

            <button
                type="button"
                className="btn-cyber btn-green"
                onClick={() => register(values.email, values.password)}
            >
                Register
            </button>

            <button
                type="button"
                className="btn-cyber btn-google"
                onClick={() => loginWithGoogle()}
            >
                <Image
                    src="/google-logo.svg"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className="google-icon"
                />
                Login With Google
            </button>

        </form>
    );
}