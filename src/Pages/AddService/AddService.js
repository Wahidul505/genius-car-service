import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://car-fixer.onrender.com/service', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };

    return (
        <div className='w-1/2 mx-auto my-20'>
            <h1 className='text-center text-4xl mb-10'>Add A Service</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='w-full border border-gray-500 rounded focus:outline-none text-lg p-1'  {...register("name")} />
                <input placeholder='Price' className='w-full border border-gray-500 rounded focus:outline-none text-lg p-1' type="number" {...register("price")} />
                <textarea placeholder='Description' className='w-full border border-gray-500 rounded focus:outline-none text-lg p-1' {...register("description")} />
                <input placeholder='Photo URL' className='w-full border border-gray-500 rounded focus:outline-none text-lg p-1' {...register("img")} />
                <input className='cursor-pointer bg-sky-600 text-white py-1 rounded text-xl' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;