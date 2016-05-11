import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  image: PropTypes.object,
  cloud: PropTypes.object,
  storageSystems: PropTypes.object,
  bootableImages: PropTypes.object,
};

class NewCloudContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.locator = props.params.locator;
    this.createImage = props.actions.createImage;
    this.initBootableImages = props.actions.initBootableImages;
    this.initStorageSystems = props.actions.initStorageSystems;
  }
  componentWillMount() {
    this.initStorageSystems(this.props.params.id);
    this.bindActionCreators();
  }

  bindActionCreators() {
    this.updateStorageSystem = this.updateStorageSystem.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleCreateImage = this.handleCreateImage.bind(this);
    this.updateBootableImage = this.updateBootableImage.bind(this);
  }
  updateCloudType(event) {
    this.props.cloud.cloudType = event.target.value;
    this.setState({ showResults: true });
  }

  handleCreateImage(event) {
    event.preventDefault();
    const data = {
      name: this.props.image.name,
    //  skipInspect: this.props.image.cloudType,
    };
    this.createImage(data, this.props.params.id, this.props.image.imageId, this.props.image.storageSystem);
    this.redirect(`/${this.locator}/clouds/${this.props.params.id}/images`);
  }

  updateName(event) {
    this.props.image.name = event.target.value;
  }
  updateBootableImage(event) {
    this.props.image.imageId = event.target.value;
  }
  updateStorageSystem(event) {
    this.props.image.storageSystem = event.target.value;
    this.initBootableImages(this.props.params.id, this.props.image.storageSystem);
    this.setState({ showResults: true });
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <Navbar.CloudTabNav locator={this.props.params.locator}
              cloudId={this.props.cloud.id}
              active="imageActive"
            />
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content >
          <h1>Create New Image</h1>

          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-9">
              <div className="panel panel-flat">
                <div className="panel-heading">

                </div>
                <div className="panel-body">

                  <form className="form-horizontal">

                    <div className="form-group">
                      <label className="control-label col-md-3">Image Name</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={this.props.image.name}
                          onChange={this.updateName}
                          placeholder="Image Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">Storage System</label>
                      <div className="col-md-9">
                        <select
                          value={this.storageSystemId}
                          onChange={this.updateStorageSystem}
                          className="form-control"
                        >
                          <option>-- Select a Storage System --</option>
                          {
                            this.props.storageSystems.map((storage) => (
                              <option
                                key={storage.id}
                                value={storage.id}
                              >
                                {storage.name}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                    </div>

                    {(() => {
                      if (this.props.image.storageSystem !== null) {
                        return (
                          <div className="form-group">
                            <label className="control-label col-md-3">Bootable Image</label>
                            <div className="col-md-9">
                              <select
                                value={this.bootableImageId}
                                className="form-control"
                                onChange={this.updateBootableImage}
                              >
                                <option>-- Select a Bootable Image --</option>
                                {
                                  this.props.bootableImages.map((boot) => (
                                    <option
                                      key={boot.id}
                                      value={boot.id}
                                    >
                                      {boot.name}
                                    </option>
                                  ))
                                }
                              </select>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })()}

                    <button
                      className="btn btn-labeled navbar-btn navbar-right btn-success"
                      onClick={this.handleCreateImage}
                    >
                      <b><i className="icon-checkmark" /></b> Save
                    </button>

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

NewCloudContainer.propTypes = propTypes;

export default NewCloudContainer;
