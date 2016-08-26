import createProductCourse from '../../components/template/product-course';
import createCatalog from '../../components/template/catalog';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

import fixture from '../../components/template/product-course/test/fixtures/default';
import fixtureCatalog from '../../components/template/catalog/test/fixtures/default';

const translate = createTranslate(locales.fr);
const options = {translate};
const selected = 1;

const _props = {
  ...fixture.props,
  selected,
  changeLevel: level => {
  }
};

export default (treant, {dispatch, history}) => {
  const {h} = treant;
  const ProductCourse = createProductCourse(treant, options);
  const Catalog = createCatalog(treant, options);

  return (props, children) => (
    <div>
      {/* <Header
        onSelectComponent={value => dispatch(navigate(history.createLocation(value)))}
      /> */}
      <ProductCourse {..._props} />
      <Catalog {...fixtureCatalog.props} />
    </div>
  );
};
