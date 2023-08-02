import { Button, Container } from '@mui/material';

const DownloadTags: React.FC = () => {
  return (
    <Container sx={{ position: 'absolute', top: '10%', left: '3%', width: '94%', display: 'flex', flexDirection: 'column', justifyContext: 'space-between' }}>
      <h3 style={{ marginLeft: 'auto', marginRight: 'auto', top: '10%', paddingBottom: '10px' }}>Download Tags</h3>
      <Button variant="outlined" sx={{ marginLeft: 'auto', marginRight: 'auto', width: '24%' }}>
        Download Tag CSV
      </Button>
    </Container>
  );
};

export { DownloadTags };
