export const genFakeTab = (id: string) => ({
  id: id.toString(),
  title: 'Tab ' + id,
  onTabSelect: (id: string) => {
    console.log('Selected id is ', id);
  }
});
