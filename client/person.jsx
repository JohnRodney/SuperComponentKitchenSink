PersonShow = React.createClass({
  propTypes: {
    person: React.PropTypes.object,
    data: React.PropTypes.object,
  },

  render() {
    const pStyle = { marginRight: '20px', marginLeft: '20px' };
    return (
      <div style={{ paddingTop: '20px' }}>
        <p style={pStyle} >Name: {this.props.person.name}</p>
        <p style={pStyle} >Email: {this.props.person.email}</p>
        {
          this.props.data.hobbies.find({ owner: this.props.person._id }).fetch().map((hobby, i) => {
            return (
              <div style={pStyle} key={'hobby' + this.props.person.name + i}>
                <p style={pStyle}>{hobby.first}</p>
                <p style={pStyle}>{hobby.second}</p>
                <p style={pStyle}>{hobby.third}</p>
              </div>
            );
          })
        }
        <hr style={{ marginTop: '20px' }}/>
      </div>
    );
  },
});
