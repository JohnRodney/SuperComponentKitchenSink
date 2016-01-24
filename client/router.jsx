const App = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },

  render() {
    return (
      <div style={{ overflowY: 'scroll' }}>
      {
        this.props.data.people.find().fetch().map((people, i) => {
          return (
            <PersonShow person={people} key={'person' + i} data={this.props.data} />
          );
        })
      }
      </div>
    );
  },
});

FlowRouter.route('/', {
  action() {
    const collections = [{
      name: 'people',
      query: [],
    }, {
      name: 'hobbies',
      query: [],
    }];
    ReactLayout.render(SuperComponent, { defaultImage: 'default.png', collections, content: App });
  },
});
