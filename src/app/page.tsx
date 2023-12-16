import { Button } from '@components/atoms/button';

const Index = () => {
  return (
    <section
      style={{ display: 'inline-flex', flexDirection: 'column', gap: '16px' }}
    >
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="tertiary">tertiary</Button>
    </section>
  );
};

export default Index;
