import { SearchBar } from 'react-native-elements';
import React from 'react';

interface SearchBarProps {
  onChange: (args: string) => void;
}

interface SearchBarState {
  search: string;
}
export default class SearchBarComponent extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  state = {
    search: '',
  };

  onSubmit = () => {
    this.props.onChange(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type here ingredients"
        onChangeText={search => this.setState({ search })}
        value={search}
        onSubmitEditing={this.onSubmit}
      />
    );
  }
}
