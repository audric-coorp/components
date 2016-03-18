import test from 'ava';
import forEachEngine from '../for-each-engine';

import createBehaviour from '../behaviour';

forEachEngine((engine, name) => {
  const {h, resolve} = engine;

  test(`${name}: should extend children properties`, t => {
    const Title = props => <h1>{props.children}</h1>;
    const Color = createBehaviour(() => props => ({style: {color: props.color}}))(engine);

    const tree = (
      <Color color="blue">
        <Title>foo</Title>
      </Color>
    );
    t.same(resolve(tree), <h1 style={{color: 'blue'}}>foo</h1>);
  });

  test(`${name}: should override children properties`, t => {
    const Title = props => <h1 style={{color: props.color}}>{props.children}</h1>;
    const Color = createBehaviour(() => props => ({style: {color: props.color}}))(engine);

    const pinkTitle = <Title color="pink">foo</Title>;

    const blueTitle = (
      <Color color="blue">
        {pinkTitle}
      </Color>
    );

    t.same(resolve(pinkTitle), <h1 style={{color: 'pink'}}>foo</h1>);
    t.same(resolve(blueTitle), <h1 style={{color: 'blue'}}>foo</h1>);
  });
});
