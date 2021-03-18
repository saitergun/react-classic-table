import React from 'react';
import ReactDOM from 'react-dom';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import Table from 'react-classic-table';

import 'modern-normalize/modern-normalize.css';
import 'react-classic-table/dist/css/react-classic-table.css';

dayjs.extend(relativeTime);

const COLUMNS = [
  {
    key: 'name',
    title: 'Name',
    renderProp: 'name',

    render: (name, player) => {
      return (
        <figure style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
          <img src={player.picture} width="auto" height={20} alt={name} />

          <figcaption style={{ marginLeft: 8 }}>{name}</figcaption>
        </figure>
      );
    }
  },
  {
    key: 'age',
    title: 'Age',
    renderProp: 'birthday',
    alignment: 'center',

    render: (birthday) => <abbr title={birthday}>{Math.floor(dayjs().diff(dayjs(birthday), 'year', true))}</abbr>
  },
  {
    key: 'nationalities',
    title: 'Nat.',
    renderProp: 'nationalities',
    alignment: 'center',

    render: (nationalities) => {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {nationalities.slice(0, 1).map((nationality, index) =>
            <figure
              key={nationality.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: 0,
                marginLeft: index ? 8 : 0,
              }}
              title={nationality.name}
            >
              <img
                src={nationality.flag}
                alt={nationality.name}
                style={{
                  width: 'auto',
                  heigh: 12,
                  border: '1px solid silver',
                }}
              />
            </figure>
          )}
        </div>
      );
    }
  },
  {
    key: 'position',
    title: 'Position',
    renderProp: 'position',
  },
  {
    key: 'clubName',
    title: 'Club',
    renderProp: 'club',

    render: (club) => {
      return (
        <figure style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
          <img src={club.logo} width="auto" height={20} alt={club.name} />

          <figcaption style={{ marginLeft: 8 }}>{club.name}</figcaption>
        </figure>
      );
    }
  },
  {
    key: 'value',
    title: 'Value',
    renderProp: 'market_value',
    alignment: 'end',

    render: (market_value) => `£${market_value.toFixed(2)}`
  },
];

const ROWS = [{id:1,name:'Kylian Mbappé',birthday:'1998-12-20',position:'Centre-Forward',picture:'https://img.a.transfermarkt.technology/portrait/medium/342229-1602849394.jpg',nationalities:[{name:'France',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/50.png'}],club:{name:'Paris Saint-Germain',logo:'https://tmssl.akamaized.net/images/wappen/normal/583.png'},market_value:162},{id:2,name:'Neymar',birthday:'1992-02-05',position:'Left Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/68290-1602849593.jpg',nationalities:[{name:'Brazil',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/26.png'}],club:{name:'Paris Saint-Germain',logo:'https://tmssl.akamaized.net/images/wappen/normal/583.png'},market_value:115.2},{id:3,name:'Sadio Mané',birthday:'1992-04-10',position:'Left Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/200512-1559901727.jpg',nationalities:[{name:'Senegal',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/149.png'}],club:{name:'Liverpool FC',logo:'https://tmssl.akamaized.net/images/wappen/normal/31.png'},market_value:108},{id:4,name:'Mohamed Salah',birthday:'1992-06-15',position:'Right Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/148455-1546611604.jpg',nationalities:[{name:'Egypt',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/2.png'}],club:{name:'Liverpool FC',logo:'https://tmssl.akamaized.net/images/wappen/normal/31.png'},market_value:108},{id:5,name:'Harry Kane',birthday:'1993-07-28',position:'Centre-Forward',picture:'https://img.a.transfermarkt.technology/portrait/medium/132098-1599986552.jpg',nationalities:[{name:'England',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/189.png'}],club:{name:'Tottenham Hotspur',logo:'https://tmssl.akamaized.net/images/wappen/normal/148.png'},market_value:108},{id:6,name:'Kevin De Bruyne',birthday:'1991-06-28',position:'Attacking Midfield',picture:'https://img.a.transfermarkt.technology/portrait/medium/88755-1515761259.jpg',nationalities:[{name:'Belgium',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/19.png'}],club:{name:'Manchester City',logo:'https://tmssl.akamaized.net/images/wappen/normal/281.png'},market_value:108},{id:7,name:'Erling Haaland',birthday:'2000-07-21',position:'Centre-Forward',picture:'https://img.a.transfermarkt.technology/portrait/medium/418560-1607454139.jpg',nationalities:[{name:'Norway',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/125.png'}],club:{name:'Borussia Dortmund',logo:'https://tmssl.akamaized.net/images/wappen/normal/16.png'},market_value:99},{id:8,name:'Trent Alexander-Arnold',birthday:'1998-10-07',position:'Right-Back',picture:'https://img.a.transfermarkt.technology/portrait/medium/314353-1559826986.jpg',nationalities:[{name:'England',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/189.png'}],club:{name:'Liverpool FC',logo:'https://tmssl.akamaized.net/images/wappen/normal/31.png'},market_value:99},{id:9,name:'Raheem Sterling',birthday:'1994-12-08',position:'Left Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/134425-1577051521.jpg',nationalities:[{name:'England',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/189.png'},{name:'Jamaica',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/76.png'}],club:{name:'Manchester City',logo:'https://tmssl.akamaized.net/images/wappen/normal/281.png'},market_value:99},{id:10,name:'João Félix',birthday:'1999-11-10',position:'Second Striker',picture:'https://img.a.transfermarkt.technology/portrait/medium/462250-1574866535.jpg',nationalities:[{name:'Portugal',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/136.png'}],club:{name:'Atlético Madrid',logo:'https://tmssl.akamaized.net/images/wappen/normal/13.png'},market_value:90},{id:11,name:'Jadon Sancho',birthday:'2000-03-25',position:'Right Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/401173-1567086818.jpg',nationalities:[{name:'England',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/189.png'}],club:{name:'Borussia Dortmund',logo:'https://tmssl.akamaized.net/images/wappen/normal/16.png'},market_value:90},{id:12,name:'Bruno Fernandes',birthday:'1994-09-08',position:'Attacking Midfield',picture:'https://img.a.transfermarkt.technology/portrait/medium/240306-1580389882.jpg',nationalities:[{name:'Portugal',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/136.png'}],club:{name:'Manchester United',logo:'https://tmssl.akamaized.net/images/wappen/normal/985.png'},market_value:81},{id:13,name:'Joshua Kimmich',birthday:'1995-02-08',position:'Defensive Midfield',picture:'https://img.a.transfermarkt.technology/portrait/medium/161056-1570373037.jpg',nationalities:[{name:'Germany',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/40.png'}],club:{name:'Bayern Munich',logo:'https://tmssl.akamaized.net/images/wappen/normal/27.png'},market_value:81},{id:14,name:'Jan Oblak',birthday:'1993-01-07',position:'Goalkeeper',picture:'https://img.a.transfermarkt.technology/portrait/medium/121483-1599986864.jpg',nationalities:[{name:'Slovenia',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/155.png'}],club:{name:'Atlético Madrid',logo:'https://tmssl.akamaized.net/images/wappen/normal/13.png'},market_value:81},{id:15,name:'Romelu Lukaku',birthday:'1993-05-13',position:'Centre-Forward',picture:'https://img.a.transfermarkt.technology/portrait/medium/96341-1596033546.jpg',nationalities:[{name:'Belgium',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/19.png'},{name:'DR Congo',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/193.png'}],club:{name:'Inter Milan',logo:'https://tmssl.akamaized.net/images/wappen/normal/46.png'},market_value:81},{id:16,name:'Heung-min Son',birthday:'1992-07-08',position:'Left Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/91845-1599987413.jpg',nationalities:[{name:'South Korea',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/87.png'}],club:{name:'Tottenham Hotspur',logo:'https://tmssl.akamaized.net/images/wappen/normal/148.png'},market_value:81},{id:17,name:'Kai Havertz',birthday:'1999-06-11',position:'Attacking Midfield',picture:'https://img.a.transfermarkt.technology/portrait/medium/309400-1507380300.jpg',nationalities:[{name:'Germany',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/40.png'}],club:{name:'Chelsea FC',logo:'https://tmssl.akamaized.net/images/wappen/normal/631.png'},market_value:72.9},{id:18,name:'Ansu Fati',birthday:'2002-10-31',position:'Left Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/466810-1560761660.jpg',nationalities:[{name:'Spain',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/157.png'},{name:'Guinea-Bissau',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/60.png'}],club:{name:'FC Barcelona',logo:'https://tmssl.akamaized.net/images/wappen/normal/131.png'},market_value:72},{id:19,name:'Marcus Rashford',birthday:'1997-10-31',position:'Left Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/258923-1565603308.png',nationalities:[{name:'England',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/189.png'}],club:{name:'Manchester United',logo:'https://tmssl.akamaized.net/images/wappen/normal/985.png'},market_value:72},{id:20,name:'Virgil van Dijk',birthday:'1991-07-08',position:'Centre-Back',picture:'https://img.a.transfermarkt.technology/portrait/medium/139208-1519830937.jpg',nationalities:[{name:'Netherlands',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/122.png'},{name:'Suriname',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/161.png'}],club:{name:'Liverpool FC',logo:'https://tmssl.akamaized.net/images/wappen/normal/31.png'},market_value:72},{id:21,name:'Alisson',birthday:'1992-10-02',position:'Goalkeeper',picture:'https://img.a.transfermarkt.technology/portrait/medium/105470-1595945929.jpg',nationalities:[{name:'Brazil',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/26.png'}],club:{name:'Liverpool',logo:'https://tmssl.akamaized.net/images/wappen/normal/31.png'},market_value:72},{id:22,name:'Lionel Messi',birthday:'1987-06-24',position:'Right Winger',picture:'https://img.a.transfermarkt.technology/portrait/medium/28003-1604164452.png',nationalities:[{name:'Argentina',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/9.png'},{name:'Spain',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/157.png'}],club:{name:'FC Barcelona',logo:'https://tmssl.akamaized.net/images/wappen/normal/131.png'},market_value:72},{id:23,name:'Alphonso Davies',birthday:'2000-11-02',position:'Left-Back',picture:'https://img.a.transfermarkt.technology/portrait/medium/424204-1570372661.jpg',nationalities:[{name:'Canada',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/80.png'},{name:'Liberia',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/95.png'}],club:{name:'Bayern Munich',logo:'https://tmssl.akamaized.net/images/wappen/normal/27.png'},market_value:67.5},{id:24,name:'Matthijs de Ligt',birthday:'1999-08-12',position:'Centre-Back',picture:'https://img.a.transfermarkt.technology/portrait/medium/326031-1568111537.jpg',nationalities:[{name:'Netherlands',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/122.png'}],club:{name:'Juventus',logo:'https://tmssl.akamaized.net/images/wappen/normal/506.png'},market_value:67.5},{id:25,name:'Andrew Robertson',birthday:'1994-03-11',position:'Left-Back',picture:'https://img.a.transfermarkt.technology/portrait/medium/234803-1559827085.jpg',nationalities:[{name:'Scotland',flag:'https://tmssl.akamaized.net/images/flagge/verysmall/190.png'}],club:{name:'Liverpool FC',logo:'https://tmssl.akamaized.net/images/wappen/normal/31.png'},market_value:67.5}];

const App = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);

  return (
    <div
      style={{
        width: 800,
        height: 500,
        fontSize: 13,
        margin: 8,
        border: '2px solid silver',
      }}
    >
      <Table
        columns={COLUMNS}
        rows={ROWS}

        defaultSelectedRows={selectedRows}
        onSelectRow={(index, indexes) => setSelectedRows(indexes)}
      />

      <pre
        style={{
          backgroundColor: '#fafafa',
          padding: 8,
        }}
      >selectedRows {JSON.stringify(selectedRows)}</pre>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
