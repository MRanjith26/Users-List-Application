import UserProfile from './Components/UserProfile/Index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ranjith',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 2,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'floyd miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'jacob jones',
    role: 'Devops Engineer',
  },
  {
    uniqueNo: 4,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'devon lane',
    role: 'UI Designer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachUser => (
        <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
