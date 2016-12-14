// reducer.js

const artists = [
    {
        image: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
        name: 'The Weeknd',
        description: '...Starboy'
    },
    {
        image: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
        name: '4m1r',
        description: '...Starboy'
    },
    {
        image: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
        name: '4m1r',
        description: '...Starboy'
    },
    {
        image: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
        name: '4m1r',
        description: '...Starboy'
    },
    {
        image: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
        name: '4m1r',
        description: '...Starboy'
    },
    {
        image: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
        name: '4m1r',
        description: '...Starboy'
    }
];

const initialState = {
    artists: artists
};

const RECEIVE_ARTISTS = 'artists/RECEIVE';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return Object.assign({}, state, {
                artists: action.artists
            })
        default:
            return state
    }
};

export const selectors = {
    selectArtists: state => state.artists
}

export const actions = {
    getArtists: (data={}) => {
        return axios({
            url: '',
            params: data,
            // paramsSerializer: function(params) {
            //     return querystring.stringify(params);
            // }
        });
    },
    fetchArtists: (query={}, toggle=true) => {
        return dispatch => {
            dispatch(toggleFetch(toggle));
            return actions.getArtists(query).then((response) => {
                dispatch(actions.receiveClients(response.data));
            });
        };
    },
    receiveArtists: (artists) => {
        return { type: RECEIVE_ARTISTS, artists };
    }
}
