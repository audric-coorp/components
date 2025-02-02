import {update, pipe, set, uniqueId} from 'lodash/fp';

import card1 from '../../../../molecule/card/test/fixtures/adaptiv';
import card3 from '../../../../molecule/card/test/fixtures/default';
import card4 from '../../../../molecule/card/test/fixtures/disabled';
import card5 from '../../../../molecule/card/test/fixtures/freerun';
import card6 from '../../../../molecule/card/test/fixtures/freerun-and-disabled';
import card7 from '../../../../molecule/card/test/fixtures/adaptiv-and-disabled';
import card8 from '../../../../molecule/card/test/fixtures/favorite';
import card9 from '../../../../molecule/card/test/fixtures/empty';

const list = [
  card1.props,
  card3.props,
  card4.props,
  card5.props,
  card6.props,
  card7.props,
  card8.props,
  card9.props
].map(
  pipe(
    update('key', () => uniqueId()),
    set('view', 'list')
  )
);

export default {
  props: {
    list
  }
};
