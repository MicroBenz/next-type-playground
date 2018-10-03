import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

type InitialProps = {
  joke: string
}

interface IProps {};

interface HomePageState {
  joke: string,
  loading: boolean
}

type Joke = {
  value: string
}

export default class Home extends Component<IProps, HomePageState> {
  constructor(props: InitialProps) {
    super(props);
    this.state = {
      joke: props.joke,
      loading: true
    };
  }

  static async getInitialProps(): Promise<InitialProps> {
    try {
      const randomJoke: Joke = await fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json());
      return { joke: randomJoke.value };
    } catch (e) {
      return { joke: '' };
    }
  }

  onRandomNewJoke = async (): Promise<any> => {
    try {
      const randomJoke: Joke = await fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json());
      this.setState({ joke: randomJoke.value });
    } catch (e) {
      console.error(e);
    }
  }

  fetchRandomJoke = async (): Promise<Joke> => {
    return await fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json());
  }

  render(): JSX.Element {
    const { joke } = this.state;
    return (
      <div className="content">
        <blockquote><i className="fas fa-spinner fa-pulse" /> {joke}</blockquote>
        <button className="button is-link" onClick={this.onRandomNewJoke}>Random Joke</button>
      </div>
    )
  }
}
