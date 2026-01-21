import './App.css'
import { Header } from './components/Header'

function App() {

  const handleAccount = () => {
    // Logic for handling "My Account" action
  }

  const handleLogout = () => {
    // Logic for handling "Sign Out" action
  }

  const navigate = (path: string) => {
    console.log(`Navigating to ${path}`);
  }

  return (
    <>
      <div className="bg-(--gray-700) text-(--gray-100)">
        <Header 
          onNavigate={(path) => navigate(path)}
          menuOptions={[
            { label: "My Account", onClick: () => handleAccount() },
            { label: "Sign Out", onClick: () => handleLogout(), divider: true }
          ]}
        />
      </div>
      <div></div>
    </>
  )
}

export default App
