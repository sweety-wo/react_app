import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';
import moment from 'moment';
import Modal, { closeStyle } from 'simple-react-modal';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  initialized: PropTypes.bool.isRequired,
  certificates: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object,
  params: PropTypes.object,
};

class CertificatesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.initCertificates = this.props.actions.initCertificates;
    this.deleteCertificate = this.props.actions.deleteCertificate;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initCertificates();
    }
    this.handleDeleteCert = this.handleDeleteCert.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  handleDeleteCert(event) {
    event.preventDefault();
    const id = event.target.value;
    this.deleteCertificate(id, this.props.certificates);
  }

  handleUploadCert(event) {
    event.preventDefault();
    this.createCertificate();
  }

  updatePassword(event) {
    this.password = event.target.value;
  }

  updateFile(event) {
    this.file = event.target.value;
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>

              <a onClick={this.show} className="btn navbar-btn navbar-right btn-primary btn-labeled">
                <b><i className="icon-plus3" /></b>Add new Certificate</a>

            <Navbar.SettingsTabNav locator={this.props.params.locator} active="certActive" />
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content >
          <h1>Certificates</h1>

          <Modal
            style={{ background: 'rgba(0,0,0,0.5)' }}
            containerStyle={{ background: 'white', width: '500px', padding: '15px' }}
            containerClassName="test"
            closeOnOuterClick
            show={this.state.show}
            onClose={this.close}
          >

            <a style={closeStyle} onClick={this.close}>X</a>
            <div><h1>Upload Certificate</h1>
            <div className="form-group">
              <input
                type="file"
                onChange={this.updateFile}
              />
            </div>
            <div className="form-group">
              <label className="control-label col-md-3">Password</label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  onChange={this.updatePassword}
                  placeholder="Password"
    />
              </div>
            </div><br /><br /><br />
            <button
              className="btn btn-labeled navbar-btn navbar-right btn-success"
              onClick={this.handleUploadCert}
    >
              <b><i className="icon-checkmark" /></b> Upload
            </button><br /><br /><br />
            </div>

          </Modal>

          <div className="panel">
            <table className="table table-responsive table-default" id="logsTable">
              <thead>
              <tr>
                <th>Subject</th>
                <th>Thumbprint</th>
                <th>Expiration</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.certificates.map((cert) => (
                  <tr key={cert.id}>
                    <td>{cert.subject}</td>
                    <td>{cert.thumbprint}</td>
                    <td>{ moment(cert.expiration).format('MMMM D YYYY, h:mm:ss a')}</td>
                    <td>
                      <button
                        className="btn btn-default btn-labeled"
                        onClick={this.handleDeleteCert}
                        value={cert.id}
                      >
                        <b><i className="icon-minus3" /></b>Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </Page.Content >
      </Page.Default>
    );
  }
}

CertificatesContainer.propTypes = propTypes;

export default CertificatesContainer;
