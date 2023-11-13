import React from 'react';
import { useState } from 'react';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handleMessageBoxChange(event) {
        setMessage(event.target.value);
    }

    function checkName() {
        setNameValid(name !== "");
    }

    function checkEmail() {
        if (email == "" || !validateEmail(email)) {
            setEmailValid(false);
        } else {
            setEmailValid(true)
        }
    }

    function checkMessage() {
        setMessageValid(message !== "");
    }

    return (
        <>
         <div className="flex items-center justify-center h-screen">
            <form className="bg-pink-300 container px-4">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Contact</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Leave a comment or question for Emily</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Your name"
                                            value={name}
                                            onChange={handleNameChange}
                                            onBlur={checkName}
                                        />
                                   
                                    {!nameValid && <p className="mt-2 text-sm text-red-600" id="name-error">Name is required</p>}
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="your.email@example.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onBlur={checkEmail}
                                    />
                                    {!emailValid && <p className="mt-2 text-sm text-red-600" id="email-error">Valid email is required</p>}
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows="3"
                                        className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Your message..."
                                        value={message}
                                        onChange={handleMessageBoxChange}
                                        onBlur={checkMessage}
                                    />
                                    {!messageValid && <p className="mt-2 text-sm text-red-600" id="message-error">Message is required</p>}
                                </div>
                                <button type="submit"
                                    className="mt-2 p-2 float-right text-white
                                   rounded-lg bg-emerald-400 hover:scale-105">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default Contact;