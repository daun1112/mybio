import React from 'react';
import { render } from '@testing-library/react';
import ProfilePicture from './ProfilePicture';
import '@fontsource/inter';
import '@fontsource/nunito';
import './styles.css'; // Assuming the CSS is in this file

test('renders ProfilePicture component', () => {
    const { getByAltText } = render(<ProfilePicture />);
    const imgElement = getByAltText(/profile/i);
    expect(imgElement).toBeInTheDocument();
});

const ProfilePicture = () => {
    return <img src="/profile.jpg" alt="Profile" />;
};

export default ProfilePicture;