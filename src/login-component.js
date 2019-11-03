import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'
import { LitElement, html, css } from 'lit-element'

class LoginComponent extends LitElement {

  static get properties () {
    return {
      username: { type: String },
      password: { type: String },
      redirectUrl: { type: String },
      userPoolId: { type: String },
      clientId: { type: String },
      errorMessage: { reflect: true }
    }
  }

  static get styles () {
    return css`
        button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
          }
          
          button:hover {
            opacity: 0.8;
          }
          
          .container {
            padding: 16px;
          }

          .warning {
              padding: 16px;
              color: red;
          }

          input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }          
          `
  }

  constructor () {
    super()
    this.username = ''
    this.password = ''
    this.errorMessage = false
  }

  render () {
    return html`<div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" .value=${this.username} @input=${this.handleUsername} required>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" .value=${this.password} @input=${this.handlePassword} required>
            ${this.errorMessage ? html`<div class="warning">Invalid Username and/or Password</div>` : ''}    
            <button @click=${this.clickHandler} type="submit">Login</button>
        </div>
        `
  }
  attributeChangedCallback (name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval)
  }

  handleUsername (e) {
    this.username = e.target.value
  }

  handlePassword (e) {
    this.password = e.target.value
  }

  clickHandler () {
    let poolData = {
      UserPoolId: this.userPoolId,
      ClientId: this.clientId
    }
    let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)
    let userData = {
      Username: this.username,
      Pool: userPool
    }
    let authenicationData = {
      Username: this.username,
      Password: this.password
    }
    let authenicationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenicationData)
    let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

    let promise = new Promise(function (resolve, reject) {
      cognitoUser.authenticateUser(authenicationDetails, {
        onSuccess: function () {
          resolve('completed')
        },
        onFailure: function () {
          reject(new Error('..'))
        }
      })
    })
    promise.then(data => {
      if (data === 'completed') {
        window.location.href = this.redirectUrl
        this.errorMessage = false
      }
    },
    error => {
      console.log(error)
      this.errorMessage = true
    })
  }
}
customElements.define('login-component', LoginComponent)
