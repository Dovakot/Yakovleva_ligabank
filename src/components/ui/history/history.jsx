import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';

import {getHistoryColCount} from '../../../utils';
import {clearHistory} from '../../../store/actions/history-actions/history-actions';
import {getHistory} from '../../../store/reducers/history-data/selectors';

import Button from '../button/button';
import HistoryCol from './history-col/history-col';

function History() {
  const dispatch = useDispatch();
  const historyData = useSelector(getHistory);

  const count = historyData.length;
  const {left, right} = getHistoryColCount(count);

  const listColLeft = historyData.slice(0, left);
  const listColRight = right ? historyData.slice(left) : [];

  const divClass = cn('conversion-history__container', {
    'conversion-history__container--separator': count > 1,
  });

  const handleButtonClick = () => dispatch(clearHistory());

  return (
    <section className="container conversion-history page-main__conversion-history">
      <h2 className="conversion-history__title">История конвертации</h2>

      <div className={divClass}>
        {count ?
          <>
            <HistoryCol items={listColLeft} />
            <HistoryCol items={listColRight} isModifier />
          </>
          : <small>Нет сохраненных данных</small>}
      </div>

      {count ?
        <Button
          text="Очистить историю"
          className="conversion-history__button"
          onButtonClick={handleButtonClick}
          isModifier
        /> : ''}
    </section>
  );
}

export default History;
