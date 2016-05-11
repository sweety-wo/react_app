import React, { Component, PropTypes } from 'react';
import { Page } from 'components';
import Loader from 'react-loader';
import moment from 'moment';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  workflow: PropTypes.arrayOf(PropTypes.object),
  initializedWorkflow: PropTypes.bool,
  initialized: PropTypes.bool,
};

class WorkflowContainer extends Component {

  constructor(props) {
    super(props);
    this.initWorkflow = this.props.actions.initWorkflow;

    this.state = {
      show: false,
    };
  }

  componentWillMount() {
    this.initWorkflow(this.props.params.id);
    this.expandRow = this.expandRow.bind(this);
  }

  expandRow(id) {
    if (this.state.id !== id) {
      this.setState({ show: id });
    } else {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            Workflow
          </Page.Header.Title>
          <Page.Header.Navbar />
        </Page.Header>
        <Page.Content >
          <Loader loaded={this.props.initializedWorkflow && this.props.initialized}>
            <div className="panel">
              <table className="table table-responsive table-default" id="workflowTable">
                <thead style={{ backgroundColor: '#f5f6fa' }}>
                <tr>
                  <th>Status</th>
                  <th>Name</th>
                  <th>Start Time</th>
                  <th>Finish Time</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.workflow.map((task) => (
                    <tr className="cursor-pointer" key={task.id} onClick={this.expandRow}>
                      <td className="text-center">
                        {(() => {
                          if (task.status === 'error') {
                            return (
                              <i className="fa fa-warning fa-lg padding-top-5"
                                style={{ color: '#CF2929', fontSize: '175%', textAlign: 'center' }}
                              >
                              </i>
                            );
                          } else if (task.status === 'complete') {
                            return (
                              <i className="fa fa-check-circle fa-lg padding-top-5"
                                style={{ color: 'green', fontSize: '175%', textAlign: 'center' }}
                              >
                              </i>
                            );
                          } else if (task.status === 'init') {
                            return (
                              <i className="fa fa-spinner fa-lg fa-spin padding-top-5"
                                style={{ color: 'green', fontSize: '175%', textAlign: 'center' }}
                              >
                              </i>
                            );
                          }

                          return null;
                        })()}
                      </td>
                      <td>{task.name}</td>
                      <td>{moment(task.startTime).format('MM/DD/YYYY HH:mm:ss')}</td>
                      <td>{moment(task.endTime).format('MM/DD/YYYY HH:mm:ss')}</td>

                      {(() => {
                        if (task.status === 'init') {
                          return (
                            <td>In progress</td>
                          );
                        }
                        return (
                          <td>
                            {
                              moment.duration(task.endTime - task.startTime, 'milliseconds')
                              .humanize()
                            }
                          </td>
                        );
                      })()}

                      <td>
                          <i className="fa fa-arrow-circle-o-right pull-right"
                            style={{ color: '#3ad1dc', fontSize: '20px' }}
                          >
                          </i>
                      </td>
                    </tr>))
                }
                    }
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

WorkflowContainer.propTypes = propTypes;

export default WorkflowContainer;
