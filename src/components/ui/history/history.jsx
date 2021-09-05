import React from 'react';

import SvgIcon from '../svg-icon/svg-icon';
import {IconType} from '../../../const';

import Button from '../button/button';

function History() {
  return (
    <section className="container conversion-history page-main__conversion-history">
      <h2 className="conversion-history__title">История конвертации</h2>

      <div className="conversion-history__container conversion-history__container--separator">
        <div className="conversion-history__wrapper">
          <table className="conversion-history__table">
            <tbody>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="conversion-history__wrapper">
          <table className="conversion-history__table conversion-history__table--right">
            <tbody>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
              <tr>
                <td>25.11.2020</td>
                <td>1000 RUB</td>
                <td>
                  <SvgIcon icon={IconType.ARROW_RIGHT} />
                </td>
                <td>13,1234 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Button
        text="Очистить историю"
        className="conversion-history__button"
        isModifier
      />
    </section>
  );
}

export default History;
