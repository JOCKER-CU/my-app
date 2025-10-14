import { useState } from "react";
import DataShowing from "./DataShowing";


export default function Registration() {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
   

    return (
        <>
            <h1>Registration</h1>
            <label>
                First name:
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Password:
                <input
                    value={form.password}
                    onChange={e => {
                        setForm({
                            ...form,
                            password: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
                {form.password}
            </p>

                <DataShowing firstName={form.firstName} lastName={form.lastName} email={form.email} password={form.password} />


        </>
    );
}