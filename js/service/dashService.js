const boards = [
    {
      title: 'Rooms',
      picture: '/pics/cinema.jpeg',
      leftDiv: 'TBC: 1/10',
      rightDiv: 'Clean: 9/10'
    },
    {
      title: 'Movies',
      picture: '/pics/movies.avif',
      leftDiv: 'On Screen: 7',
      rightDiv: 'To be set: 3'
    },
    {
      title: 'Finances',
      picture: '/pics/finance.jpeg',
      leftDiv: 'Daily: 2456,10$',
      rightDiv: 'Montly: 35.432,67$'
    },
    {
      title: 'Bar',
      picture: '/pics/bar.jpeg',
      leftDiv: 'Daily: 245,10$',
      rightDiv: 'Montly: 3.432,67$'
    }
  ];
  
  async function getBoard(index) {
    return boards[index]
  };
  
  async function getBoards() {
    return boards;
  }
  
  export default { getBoard, getBoards };