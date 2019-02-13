import React from 'react'
import Button from '@material-ui/core/Button';

class films extends React.Component {
  lienfilm() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <Button
           variant="contained"
           color="primary"
           onClick={this.lienfilm.bind(this)}
           >MORE DETAILS
           </Button>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default films
