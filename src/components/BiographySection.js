import React from 'react';
import './BiographySection.css'; // Assuming you will create a separate CSS file for this component

const BiographySection = () => {
    return (
        <div className="biography-section">
            <h1 className="full-name">Ваше Имя Фамилия</h1>
            <p className="age">Возраст: 30</p>
            <p className="bio">
                Краткая биография: Здесь вы можете написать о себе, своих интересах и достижениях.
            </p>
        </div>
    );
};

export default BiographySection;