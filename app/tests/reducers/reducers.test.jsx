var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict'); // Checks to make sure the reducer functions are pure functions by checking to see if it update any of the specified variable directly.

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });

    describe('showCompletedReducer', () => {
      it('should toggle showCompleted', () => {
        var action = {
          type:'TOGGLE_SHOW_COMPLETED',
        };

        var res = reducers.showCompletedReducer(df(false), df(action));

        expect(res).toEqual(true);
      });
    });
  });
});
