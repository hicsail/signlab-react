import { ControlComponent } from '../components/ControlComponent';

const rows = [
  { id: 1, name: 'Study Microsoft', description: '1 Description of the object' },
  { id: 2, name: 'Study IBM', description: 'You can define the prefix for generated group names and the owner/superior group in step 1 of the ISFACR security migration process.' },
  { id: 3, name: 'Study APPLe', description: '3 Description of the object' },
  { id: 4, name: 'Study SpaceX', description: '4 Description of the object' },
  { id: 5, name: 'Study Citadel', description: '5 Description of the object' },
  { id: 6, name: 'Study Alphabet & Co', description: '6 Description of the object' },
  { id: 7, name: 'Study Pavement', description: '7 Description of the object' },
  { id: 8, name: 'Study Blank Street', description: '8 Description of the object' },
  { id: 9, name: 'Study Tatte', description: '9 Description of the object' }
];

const StudyControl: React.FC = () => {
  return <ControlComponent tableRows={rows} />;
};

export { StudyControl };
