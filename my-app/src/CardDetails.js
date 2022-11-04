import React, { useEffect, useRef, useState } from "react";

export function CardDetails({ initialData }) {
    const formRef = useRef();
    const [data, setData] = useState({ initialData });

    function handleFormSubmit(event) {
        event.preventDefault();

        const newData = {
            brand: formRef.current.elements.brand.value,
            model: formRef.current.elements.model.value,
            year: formRef.current.elements.year.value,
            color: formRef.current.elements.color.value
        };

        setData(newData);
    }

    useEffect(() => {
        formRef.current.focus();
    }, []);
    useEffect(() => setData(initialData), [initialData]);
    useEffect(() => console.log('data', data));

    return (
        <div className="form">
            <form ref={formRef} onSubmit={handleFormSubmit}>
                <legend>Car details</legend>
                <label>
                    Brand
                    <input type="text" name="brand" defaultValue={initialData.brand} />
                </label>
                <label>
                    Model
                    <input type="text" name="model" defaultValue={initialData.model} />
                </label>
                <label>
                    Year
                    <input type="text" name="year" defaultValue={initialData.year} />
                </label>
                <label>
                    Color
                    <input type="text" name="color" defaultValue={initialData.color} />
                </label>

                <button type="submit" name="login">Submit</button>
                <button type="reset" name="reset">Reset</button>
            </form>
        </div>
    );
}