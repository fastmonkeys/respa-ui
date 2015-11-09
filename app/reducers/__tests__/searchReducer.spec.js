import { expect } from 'chai';

import _ from 'lodash';
import { createAction } from 'redux-actions';
import Immutable from 'seamless-immutable';

import types from 'constants/ActionTypes';
import Resource from 'fixtures/Resource';
import searchReducer from 'reducers/searchReducer';

describe('Reducer: searchReducer', () => {
  describe('initial state', () => {
    const initialState = searchReducer(undefined, {});

    it('results should be an empty array', () => {
      expect(initialState.results).to.deep.equal([]);
    });
  });

  describe('handling actions', () => {
    describe('API.SEARCH_RESULTS_GET_SUCCESS', () => {
      const searchResourcesSuccess = createAction(
        types.API.SEARCH_RESULTS_GET_SUCCESS,
        (resources) => {
          return {
            entities: {
              resources: _.indexBy(resources, 'id'),
            },
          };
        }
      );
      const resources = [
        Resource.build(),
        Resource.build(),
      ];

      it('should set the given resource ids to results', () => {
        const action = searchResourcesSuccess(resources);
        const initialState = Immutable({
          results: [],
        });
        const expected = [resources[0].id, resources[1].id];
        const nextState = searchReducer(initialState, action);

        expect(nextState.results).to.deep.equal(expected);
      });

      it('should replace the old ids in searchResults.ids', () => {
        const action = searchResourcesSuccess(resources);
        const initialState = Immutable({
          results: ['replace-this'],
        });
        const expected = [resources[0].id, resources[1].id];
        const nextState = searchReducer(initialState, action);

        expect(nextState.results).to.deep.equal(expected);
      });
    });
  });
});