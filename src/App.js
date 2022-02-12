import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ''
    }

  }

  handleChange  = (e) => {
    this.setState({searchField : e.target.value})
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({monsters : users}));
  }

  render() {
    const {monsters , searchField} = this.state
    let filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        <button 
          className="deplecateThem" 
          onClick= { () => this.setState({monsters: monsters
          .concat(monsters.map((item, idx) => {
            return {
              name : item.name,
              email: item.email,
              id : monsters.length + idx + 1
            }
          }
          ))})}> Deplecate Them 
        </button>
      </div>
    );
  }
}

export default App;
