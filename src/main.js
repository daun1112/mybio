const BiographySection = () => import('./components/BiographySection.js');
const ContactSection = () => import('./components/ContactSection.js');
const LanguageSwitcher = () => import('./components/LanguageSwitcher.js');
const ProfilePicture = () => import('./components/ProfilePicture.js');
const ProjectsSection = () => import('./components/ProjectsSection.js');

const App = () => {
    return (
        <div className="app">
            <LanguageSwitcher />
            <ProfilePicture />
            <BiographySection />
            <ContactSection />
            <ProjectsSection />
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);