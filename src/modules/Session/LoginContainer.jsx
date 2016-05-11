import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';
import { isEmpty } from 'lodash';
import './styles/Login.less';
import logo from 'img/logo_light.png';

const propTypes = {
  actions: PropTypes.object.isRequired,
  location: PropTypes.object,
  loginProfile: PropTypes.object,
  params: PropTypes.object,
};

class LoginContainer extends Component {

  constructor(props) {
    super(props);
    this.userLogin = props.actions.userLogin;
    this.redirect = props.actions.push;
    this.profile = props.loginProfile;
    this.locator = props.params.locator;
    this.username = '';
    this.password = '';
  }

  componentWillMount() {
    this.handleLogin = this.handleLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  updateUsername(event) {
    this.username = event.target.value;
  }

  updatePassword(event) {
    this.password = event.target.value;
  }

  handleLogin(event) {
    event.preventDefault();

    const data = {
      username: this.username,
      password: this.password,
      wsid: this.profile.wsId,
    };

    this.userLogin(data).then(() => {
      const query = this.props.location.query;
      if (!isEmpty(query) && !isEmpty(query.redirect)) {
        this.redirect(query.redirect);
      } else {
        this.redirect(`/${this.props.params.locator}/dashboard`);
      }
    });
  }

  render() {
    const wsLogo = (this.profile.wsLogo !== null)
      ? <img src={this.profile.wsLogo} role="presentation" className="img-responsive img-square-200 center-block" />
      : <div className="icon-object border-slate-300 text-slate-300"><i className="icon-user-lock" /></div>;

    return (
      <div>
        <Navbar id="navbar" className="bg-white border-bottom-grey-300 navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand
              name={this.props.loginProfile.spName}
              image={this.props.loginProfile.spLogo}
            />
          </Navbar.Header>
          <Navbar.Brand
            className="navbar-right"
            name="Vertiscale"
            image={logo}
          />
        </Navbar>
        <Page className="Login-container bg-vs-gradient">
          <Page.ContentWrapper>
            <form onSubmit={this.handleLogin} >
              <div className="panel panel-body login-form">
                <div className="text-center">
                  { wsLogo }
                  <h5 className="content-group">
                    Login to { this.profile.wsName }<br />
                    <small className="display-block">Enter your credentials below</small>
                  </h5>
                </div>
                <div className="form-group has-feedback has-feedback-left">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={this.updateUsername}
                  />
                  <div className="form-control-feedback">
                    <i className="icon-user text-muted" />
                  </div>
                </div>
                <div className="form-group has-feedback has-feedback-left">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.updatePassword}
                  />
                  <div className="form-control-feedback">
                    <i className="icon-lock2 text-muted" />
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign in <i className="icon-circle-right2 position-right" />
                  </button>
                </div>
              </div>
            </form>
          </Page.ContentWrapper>
        </Page>
      </div>
    );
  }

}

LoginContainer.propTypes = propTypes;

export default LoginContainer;
