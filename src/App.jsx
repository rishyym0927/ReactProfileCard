import ProfileCard from './ProfileCard'
import './App.css'

function App() {
  const profileData = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    description: 'Passionate about creating elegant solutions to complex problems. Love working with React, Node.js, and modern web technologies.',
    avatar: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23667eea"/%3E%3Cpath d="M100 110c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zm0 10c20 0 50 10 50 30v20H50v-20c0-20 30-30 50-30z" fill="%23fff"/%3E%3C/svg%3E',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'john.doe@example.com'
    }
  }

  return (
    <div className="app">
      <ProfileCard {...profileData} />
    </div>
  )
}

export default App
