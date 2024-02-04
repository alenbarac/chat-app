import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Register = () => {
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TN Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src="" alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {error && <span>There was something wrong</span>}
        </form>
        <p>
          You do have an account? <a href="/register">Login</a>
        </p>
      </div>
    </div>
  )
}

export default Register
