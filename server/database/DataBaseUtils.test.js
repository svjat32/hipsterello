/**
 * Created by @nikitalpopov on 07/07/2017.
 */

import * as db from './DataBaseUtils';

it('sets up connection', () => {
    db.setUpConnection();
});

it('closes connection', () => {
    db.closeConnection();
});
