import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const [form, setForm] = useState({
        name: "",
        age: ""
    })

    const changeName = (e) => {
        setName(e.target.value)

        setForm({
            ...form, name: e.target.value
        })
    }

    const changeAge = (e) => {
        setAge(e.target.value)

        setForm({
            ...form, age: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setName("")
        setAge("")
        setForm({
            name: "",
            age: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                姓名 <input onChange={changeName} value={form.name} type="text" />
                年龄 <input onChange={changeAge} value={form.age} type="text" />
                <button type='submit'>提交</button>
            </form>
        </div>
    );
};

export default Form;