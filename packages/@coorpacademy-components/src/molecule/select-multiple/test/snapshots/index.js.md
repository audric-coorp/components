# Snapshot report for `packages/@coorpacademy-components/src/molecule/select-multiple/test/index.js`

The actual snapshot is saved in `index.js.snap`.

Generated by [AVA](https://ava.li).

## should shallow render when select is opened

> Snapshot 1

    ShallowWrapper [
      undefined,
      ---
      length: 1,
      ---
      <div
        className="select-multiple__default variables__defaultText"
      >
        <span
          className="select-multiple__title"
        >
          Learning Path:
        </span>
        <div
          className="select-multiple__select"
          onClick={Function {}}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <NovaArrowDown⍟
            className="select-multiple__arrow select-multiple__down"
            color={undefined}
          />
        </div>
        <div
          className="select-multiple__activeChoices"
        >
          <ul
            className="select-multiple__list"
          >
            <li
              className="select-multiple__choice"
              key="0"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 0,
                    name: 'Digital',
                    selected: false,
                    value: 'digital',
                  }
                }
                onToggle={Function {}}
              />
            </li>
            <li
              className="select-multiple__choice"
              key="1"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 1,
                    name: 'Esprit du temps',
                    selected: false,
                    value: 'espritDuTemps',
                  }
                }
                onToggle={Function {}}
              />
            </li>
            <li
              className="select-multiple__choice"
              key="2"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 2,
                    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
                    selected: true,
                    value: 'loremIpsum',
                  }
                }
                onToggle={Function {}}
              />
            </li>
            <li
              className="select-multiple__choice"
              key="3"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 3,
                    name: 'Le monde du projet',
                    selected: false,
                    value: 'project',
                  }
                }
                onToggle={Function {}}
              />
            </li>
          </ul>
        </div>
      </div>,
    ]

## should shallow render with default props

> Snapshot 1

    ShallowWrapper [
      undefined,
      ---
      length: 1,
      ---
      <div
        className="select-multiple__default variables__defaultText"
      >
        <span
          className="select-multiple__title"
        >
          Learning Path:
        </span>
        <div
          className="select-multiple__select"
          onClick={Function {}}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <NovaArrowDown⍟
            className="select-multiple__arrow"
            color={undefined}
          />
        </div>
        <div
          className="select-multiple__choices"
        >
          <ul
            className="select-multiple__list"
          >
            <li
              className="select-multiple__choice"
              key="0"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 0,
                    name: 'Digital',
                    selected: false,
                    value: 'digital',
                  }
                }
                onToggle={Function {}}
              />
            </li>
            <li
              className="select-multiple__choice"
              key="1"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 1,
                    name: 'Esprit du temps',
                    selected: false,
                    value: 'espritDuTemps',
                  }
                }
                onToggle={Function {}}
              />
            </li>
            <li
              className="select-multiple__choice"
              key="2"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 2,
                    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
                    selected: true,
                    value: 'loremIpsum',
                  }
                }
                onToggle={Function {}}
              />
            </li>
            <li
              className="select-multiple__choice"
              key="3"
            >
              <TitledCheckbox⍟
                background={undefined}
                choice={
                  {
                    i: 3,
                    name: 'Le monde du projet',
                    selected: false,
                    value: 'project',
                  }
                }
                onToggle={Function {}}
              />
            </li>
          </ul>
        </div>
      </div>,
    ]