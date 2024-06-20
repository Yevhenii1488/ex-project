import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Survey() {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your answer: ${answer}`);
    };

    return (
        <div className="container">
            <h1>Survey</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="question" className="form-label">What is your favorite type of cuisine?</label>
                    <select
                        id="question"
                        className="form-select"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}>
                        <option value="">Select an answer</option>
                        <option value="Italian">Italian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Indian">Indian</option>
                        <option value="Mexican">Mexican</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Survey;