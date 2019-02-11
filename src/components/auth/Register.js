import React from 'react'
import axios from 'axios'


class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        image: '',
        items: []
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    console.log('Change being handled')
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    //console.log('Submission being handled')
    axios
      .post('/api/register', this.state.data)
      .then(()=> this.props.history.push('/login'))
      .then(()=> console.log(this.state.data + 'sent to /api/register'))
      .catch(err => alert(err.message))
  }

  render() {
    const { username, email, password, passwordConfirmation, image } = this.state.data
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input is-warning"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input is-warning"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input
                className="input is-warning"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <input
                className="input is-warning"
                type="password"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Profile picture (public)</label>
              <input
                className="input is-warning"
                name="image"
                placeholder="Image url"
                value={image}
                onChange={this.handleChange}
              />
            </div>
            <button className="button is-info">Submit</button>
          </form>
        </div>
      </main>
    )
  }


}

export default Register