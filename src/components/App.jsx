import React, {Component} from "react"
import {moviesData} from "../moviesData"


class App extends Component {
	state = {
		movies: moviesData
	}

	render() {
		const {movies} = this.state
		return (
			<>
				{movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
			</>
		)
	}
}

export default App
