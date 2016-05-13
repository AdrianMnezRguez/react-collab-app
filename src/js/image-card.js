var ImageCard = React.createClass({
  render: function() {
    return (
      <div className="imageCard" >
        <img src={this.props.image}/>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
});
ReactDOM.render(
  <ImageCard image="http://i.imgur.com/VG1jmqn.jpg" title="Laser cat" description="A cat shooting a laser."/>,
  document.getElementById('content')
);