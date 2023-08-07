import { User } from './users';

const generateRandomNums = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const mockApi = <Response, Args>(_args: Args, resp: Response) =>
  new Promise<Response>((resolve) =>
    setTimeout(() => resolve(resp), generateRandomNums(500, 700))
  );

const names = [
  'Pamela Cummings',
  'Kevin Buchanan',
  'Cason Levy',
  'Annabella Sosa',
  'Caitlin Levy',
  'Gloria Carter',
  'Linda Watts',
  'Linda Butler',
  'Kyan Mullen',
  'Sylvia Contreras',
  'Riley Clements',
  'Nadia Haynes',
  'Jerimiah Vega',
  'Kayleigh Reilly',
  'Camille Novak',
  'Angelique Palmer',
  'Levi Hancock',
  'Kimora Burton',
  'Michaela Myers',
  'Dax Gibbs',
  'Taliyah Cook',
  'Hector Pennington',
  'Gillian Sosa',
  'John Petersen',
  'Kimora Schroeder',
  'Gavyn Oconnell',
  'Ayden Medina',
  'Bennett Lang',
  'Melody Villegas',
  'Danny Jordan',
  'Nathalie Daniels',
  'Lilyana Vasquez',
  'Scarlett Washington',
  'Demarion Schultz',
  'Antoine Cantu',
  'Helen Stanton',
  'Bruce Marks',
  'Jordon Banks',
  'Joaquin Leblanc',
  'Cailyn Combs',
  'Esmeralda Melendez',
  'Davon Dickerson',
  'Laney Mata',
  'Kimora Dougherty',
  'Chanel Townsend',
  'Bryanna Ayers',
  'Aleah Moon',
  'Isla Rowe',
  'Dominic Ali',
  'Christian Medina',
];

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia & Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central Arfrican Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cuba',
  'Curacao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauro',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panappma',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre & Miquelon',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St Kitts & Nevis',
  'St Lucia',
  'St Vincent',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks & Caicos',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const createUsers = (): User[] =>
  new Array(names.length).fill({}, 0, names.length).map((obj, idx) => ({
    ...obj,
    id: `u${idx}`,
    name: names[idx],
    age: generateRandomNums(18, 40),
    country: countries[generateRandomNums(0, countries.length)],
  }));

const api = {
  remove: mockApi,
  fetchUsers: () => mockApi(null, createUsers()),
};

export default api;