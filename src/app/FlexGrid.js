import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { actions, selectors } from './reducer';

const mapStateToProps = (state, ownProps) => ({
    selectArtists: selectors.selectArtists(state)
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: (params) => dispatch(actions.fetchArtists(params))
});

export class FlexGrid extends Component {

    componentWillMount() {
        // actions.fetchArtists here or use defaults
    }

    render() {

        const artists = this.props.selectArtists;

        return (
            <div>
                <div className="full">
                    <div className="flex-grid">
                        <Item {...artists[0]} />
                        <Item {...artists[1]} />
                        <Item {...artists[2]} />
                    </div>
                    <div className="flex-grid">
                    <Item {...artists[3]} />
                    <Item {...artists[4]} />
                    <Item {...artists[5]} />
                    </div>
                </div>

                <div className="small">
                    <div className="flex-grid">
                        <Item {...artists[0]} />
                        <Item {...artists[1]} />
                    </div>
                    <div className="flex-grid">
                        <Item {...artists[2]} />
                        <Item {...artists[3]} />
                    </div>
                    <div className="flex-grid">
                        <Item {...artists[4]} />
                        <Item {...artists[5]} />
                    </div>
                </div>

                <div className="mini">
                    <div className="flex-grid">
                        <Item {...artists[0]} />
                        <Item {...artists[1]} />
                        <Item {...artists[2]} />
                        <Item {...artists[3]} />
                        <Item {...artists[4]} />
                        <Item {...artists[5]} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlexGrid);
