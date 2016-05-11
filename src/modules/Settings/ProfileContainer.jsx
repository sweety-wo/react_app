import React, { Component, PropTypes } from 'react';
import ProfileLogo from 'img/logo_light_bk.png';
import { Page, Navbar } from 'components';

const propTypes = {
  actions: PropTypes.object.isRequired,
  spProfile: PropTypes.object,
  timezones: PropTypes.arrayOf(PropTypes.object),
  params: PropTypes.object,
};

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
    this.fetchProfile = props.actions.fetchProfile;
    this.profileSaved = props.actions.profileSaved;

    this.name = '';
    this.email = '';
    this.phone = '';
    this.linkedIn = '';
    this.facebook = '';
    this.timezoneId = '';
  }

  componentWillMount() {
    this.bindActionCreators();
    this.bindProps();
  }

  bindActionCreators() {
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    this.updateProfileUsername = this.updateProfileUsername.bind(this);
    this.updateProfilePhone = this.updateProfilePhone.bind(this);
    this.updateProfileEmail = this.updateProfileEmail.bind(this);
    this.updateProfileLinkedIn = this.updateProfileLinkedIn.bind(this);
    this.updateProfileFacebook = this.updateProfileFacebook.bind(this);
    this.updateProfileTimezone = this.updateProfileTimezone.bind(this);
  }

  bindProps() {
    this.name = this.props.spProfile.name || '';
    this.email = this.props.spProfile.email || '';
    this.phone = this.props.spProfile.phone || '';
    this.linkedIn = this.props.spProfile.linkedIn || '';
    this.facebook = this.props.spProfile.facebook || '';
    this.timezoneId = this.props.spProfile.timeZoneId || '';
  }

  updateProfileUsername(event) {
    this.name = event.target.value;
  }

  updateProfilePhone(event) {
    this.phone = event.target.value;
  }

  updateProfileEmail(event) {
    this.email = event.target.value;
  }

  updateProfileLinkedIn(event) {
    this.event = event.target.value;
  }

  updateProfileFacebook(event) {
    this.facebook = event.target.value;
  }

  updateProfileTimezone(event) {
    this.timezoneId = event.target.value;
  }

  handleUpdateProfile(event) {
    event.preventDefault();

    const data = {
      name: this.name,
      facebookHandle: this.facebook,
      id: this.spId,
      linkedInHandle: this.linkedIn,
      supportEmail: this.email,
      supportPhone: this.phone,
      twitterHandle: null,
      timeZoneId: this.timezoneId,
    };

    this.profileSaved(data);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <Navbar.SettingsTabNav locator={this.props.params.locator} active="profileActive" />
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content >
          <div className="row">
            <div className="col-md-3">
              <div className="thumbnail">
                <div className="thumb">
                  <img src={ProfileLogo} alt="Logo" />
                  <div className="caption-overflow">
                    <span>
                      <button className="btn bg-warning-300 btn-labeled">
                        <b><i className="icon-pencil" /></b>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="panel panel-flat">
                <div className="panel-heading">
                  <h5 className="panel-title">Service Provider Profile</h5>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-3">Name</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          value={this.name}
                          onChange={this.updateProfileUsername}
                          placeholder="Service Provider Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">Phone Number</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          value={this.phone}
                          onChange={this.updateProfilePhone}
                          placeholder="552-GET-HELP"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">Email Address</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          value={this.email}
                          onChange={this.updateProfileEmail}
                          placeholder="demo@example.com"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">LinkedIn</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          value={this.linkedIn}
                          onChange={this.updateProfileLinkedIn}
                          placeholder="/in/"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">Facebook</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          value={this.facebook}
                          onChange={this.updateProfileFacebook}
                          placeholder="fb.me/"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">Timezone</label>
                      <div className="col-md-9">
                        <select
                          value={this.timezoneId}
                          onChange={this.updateProfileTimezone}
                          className="form-control"
                        >
                          <option>-- Select a Timezone --</option>
                          {
                            this.props.timezones.map((timezone) => (
                              <option
                                key={timezone.id}
                                value={timezone.id}
                              >
                                {timezone.description}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Page.Content >
      </Page.Default>
    );
  }
}

ProfileContainer.propTypes = propTypes;

export default ProfileContainer;
