import test from 'ava';
import {memoize} from 'lodash/fp';
import memoizeTask, {_memoizeTask} from '../memoize-task';

test('it should return the same promise if first argument is the same and last task did not finish yet', async t => {
  const setPlayerScore = memoizeTask((playerId, score) => Promise.resolve(score));
  const firstPromise = setPlayerScore('john', 0);
  const secondPromise = setPlayerScore('john', 1);
  const firstScore = await firstPromise;
  const secondScore = await secondPromise;

  t.is(firstScore, 0);
  t.is(secondScore, 0);
});

test('it not should return the same promise if first argument is not the same and last task did not finish yet', async t => {
  const setPlayerScore = memoizeTask((playerId, score) => Promise.resolve(score));
  const firstPromise = setPlayerScore('john', 0);
  const secondPromise = setPlayerScore('jane', 1);
  const firstScore = await firstPromise;
  const secondScore = await secondPromise;

  t.is(firstScore, 0);
  t.is(secondScore, 1);
});

test('it not should return the same promise if first argument is the same and last task succeeded before second call', async t => {
  const setPlayerScore = memoizeTask((playerId, score) => Promise.resolve(score));
  const firstScore = await setPlayerScore('john', 0);
  const secondScore = await setPlayerScore('john', 1);

  t.is(firstScore, 0);
  t.is(secondScore, 1);
});

test('it should forward any task error', async t => {
  const setPlayerScore = memoizeTask((playerId, score) =>
    Promise.reject(new Error(`Can't set score to ${score} from ${playerId}`))
  );
  const firstPromise = setPlayerScore('john', 0);
  const secondPromise = setPlayerScore('john', 1);

  await t.throwsAsync(firstPromise, "Can't set score to 0 from john");
  return t.throwsAsync(secondPromise, "Can't set score to 0 from john");
});

test('it not should return the same promise if first argument is the same and last task failed before second call', async t => {
  const setPlayerScore = memoizeTask((playerId, score) =>
    Promise.reject(new Error(`Can't set score to ${score} from ${playerId}`))
  );

  await t.throwsAsync(setPlayerScore('john', 0), "Can't set score to 0 from john");
  return t.throwsAsync(setPlayerScore('john', 1), "Can't set score to 1 from john");
});

test('it should forward any error from the memoize cache', t => {
  const memoizeTaskWithCacheFailures = _memoizeTask(task => {
    const memoizedTask = memoize(task);

    memoizedTask.cache.delete = cacheId => {
      throw new Error(`No, I won't delete cache id ${cacheId}`, memoizedTask.cache);
    };

    return memoizedTask;
  });

  const setPlayerScore = memoizeTaskWithCacheFailures((playerId, score) => Promise.resolve(score));

  return t.throwsAsync(setPlayerScore('john', 0), "No, I won't delete cache id john");
});
