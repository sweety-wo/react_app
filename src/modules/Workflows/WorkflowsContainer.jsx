import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Loader from 'react-loader';
import { Page } from 'components';
import moment from 'moment';
import './styles/Workflows.less';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  workflows: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
};

class WorkflowsContainer extends Component {

  constructor(props) {
    super(props);
    this.initWorkflows = props.actions.initWorkflows;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initWorkflows({});
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            Workflows
          </Page.Header.Title>
          <Page.Header.Navbar />
        </Page.Header>
        <Page.Content >
          <Loader loaded={this.props.initialized}>
            <div className="panel">
              <table className="table table-responsive table-default" id="workflowsTable">
                <thead style={{ backgroundColor: '#f5f6fa' }}>
                <tr>
                  <th>Status</th>
                  <th>Name</th>
                  <th className="text-center">Start Time</th>
                  <th className="text-center">Duration</th>
                  <th>Progress</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.workflows.map((workflow) => (

                      <tr key={workflow.id}>
                        <td>
                          {(() => {
                            if (workflow.status === 'init') {
                              return (
                                <i className="fa fa-play-circle fa-lg padding-top-5 workflowFontSize"
                                  style={{ color: 'green' }}
                                >
                                </i>
                              );
                            } else if (workflow.status === 'running') {
                              return (
                                <i className="fa fa-spinner fa-lg fa-spin padding-top-5 workflowFontSize"
                                  style={{ color: 'orange' }}
                                >
                                </i>
                              );
                            } else if (workflow.status === 'complete') {
                              return (
                                <i className="fa fa-check-circle fa-lg padding-top-5 workflowFontSize"
                                  style={{ color: 'green' }}
                                >
                                </i>
                              );
                            } else if (workflow.status === 'error') {
                              return (
                                <i className="fa fa-exclamation-circle fa-lg padding-top-5 workflowFontSize"
                                  style={{ color: '#CF2929' }}
                                >
                                </i>
                              );
                            } else if (workflow.status === 'stopping') {
                              return (
                                <i className="fa fa-stop fa-blink fa-lg padding-top-5"
                                  style={{ color: '#CF2929',
                                  fontSize: '125%' }}
                                >
                                </i>
                              );
                            } else if (workflow.status === 'stopped') {
                              return (
                                <i className="fa fa-stop fa-lg padding-top-5"
                                  style={{ color: '#CF2929',
                                  fontSize: '125%' }}
                                >
                                </i>
                              );
                            } else if (workflow.status === 'resumed') {
                              return (
                                <i className="fa fa-hourglass fa-lg padding-top-5 workflowFontSize"
                                  style={{ color: '#E5E600' }}
                                >
                                </i>
                              );
                            }

                            return null;
                          })()}
                        </td>
                        <td>{workflow.name}</td>
                        <td className="text-center">
                          {moment(workflow.startTime).format('MM/DD/YYYY HH:mm:ss')}
                        </td>

                        <td className="text-center">
                          {
                            moment.duration(workflow.endTime - workflow.startTime, 'milliseconds')
                            .humanize()
                          }
                        </td>

                        {(() => {
                          if (workflow.status === 'running' || workflow.status === 'stopping') {
                            return (
                              <td className="text-center">In progress</td>
                            );
                          }
                          return (
                            <td className="text-center">
                              Task { workflow.loadedTasks} of {workflow.totalTasks }
                            </td>
                          );
                        })()}

                        <td className="text-center">
                          {(() => {
                            if (workflow.status === 'stopped') {
                              return (
                                <i className="icon-play3" id="controlButtons"> </i>
                              );
                            } else if (workflow.status === 'running') {
                              return (
                                <i className="icon-pause" id="controlButtons"> </i>
                              );
                            } else if (workflow.status === 'error') {
                              return (
                                <i className="fa fa-refresh" id="controlButtons"> </i>
                              );
                            }

                            return null;
                          })()}

                          {(() => {
                            if (workflow.status !== 'running' && workflow.status !== 'stopping') {
                              return (
                                <i className="icon-trash" id="controlButtons"> </i>
                              );
                            }
                            return null;
                          })()}
                        </td>
                        <td>
                          <Link to={`/${this.props.params.locator}/workflows/${workflow.id}`}>
                            <i className="fa fa-arrow-circle-o-right pull-right"
                              style={{ color: '#3ad1dc', fontSize: '20px' }}
                            >
                            </i>
                          </Link>
                        </td>
                      </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
            <div id="content"></div>
          </Loader>
        </Page.Content >
      </Page.Default>
    );
  }
}

WorkflowsContainer.propTypes = propTypes;

export default WorkflowsContainer;
