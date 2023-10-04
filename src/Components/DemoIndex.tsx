
"use client"; // This is a client component 
import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Modal } from './Modal';

const DemoIndex: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    //Show Modal

    const [showModal, setShowModal] = useState<boolean>(false)

    // const handleAlert = () => {
    //         const alertMessage = `Email-: ${email} \n Password-: ${password}`;
    //     alert(alertMessage);
    //     setEmail('')
    //     setPassword('')


    // };
    const handleSubmit =()=>{
        if(!email || !password)
        {
            alert("Requires email and password")
        }
        else{
        setShowModal(true) 
        }
    }

    return (
        <>
            <div className="w-[1100px] m-auto h-screen flex justify-center items-center">

                <div className="w-[600px] bg-blue-100">
                    <div className="flex flex-col border-2  gap-6 shadow-lg p-12">

                        <Input labelName='Email' placeholder='Email' type='text' value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                        <Input labelName='Password' placeholder='Password' type='password' value={password} onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <Button buttonName='Submit' onClick={handleSubmit} />
                    </div>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} email={email} password={password} />
        </>
    );
};

export default DemoIndex;

