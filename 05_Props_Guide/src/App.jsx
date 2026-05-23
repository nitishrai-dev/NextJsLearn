// import './App.css'
import BasicProps from './components/BasicProps.jsx'
import ChildrenProps from './components/ChildrenProps.jsx'
import RefProps from './components/RefProps.jsx'
import ComplexProps from './components/ComplexProps.jsx'
import ThemeToggler from './components/ThemeToggler.jsx'

function Navigation(){
  const isDark = true

  const sections = [
    {id: 'basic', label: 'Basic Props', icon: '📦'},
    {id: 'children', label: 'Children Props', icon: '👶'},
    {id: 'ref', label: 'Ref Props', icon: '🔗'},
    {id: 'complex', label: 'Complex Props', icon: '🧩'},
    {id: 'theme', label: 'Theme Toggler', icon: '🎨'},
  ];

  return(
    <nav classname={`sticky top-0 z-10 shadow-md`}>
      <div>
        <div>
          {sections.map((section)=>(
            <button 
            className={`px-4 py-2 m-2 rounded-lg font-medium transition-all bg-blue-600 text-white hover:bg-blue-800`}
            key={section.id}>
              <span className='mr-2'>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}


function AppContent(){
  const isDark = true
  return(
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
     <div className="container mx-auto px-4 py-8">
      <header>
        <h1>React props explained</h1>
        <p>A comprehensive guide to understanding React props</p>
      </header>

      <div className="space-y-8">
        <div id='basic'className="scroll-mt-200">
          <BasicProps />
        </div>
        <div id='children'className="scroll-mt-200">
          <ChildrenProps />
        </div>
        <div id='ref'className="scroll-mt-200">
          <RefProps />
        </div>
        <div id='complex'className="scroll-mt-200">
          <ComplexProps />
        </div>
        <div id='theme'className="scroll-mt-200">
          <ThemeToggler />
        </div>
      </div>
     </div>
    </div>
  )
}



function App() {

  return (
    <>
      <AppContent />
    </>
  )
}

export default App
