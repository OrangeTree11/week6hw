for(let i = 0; i < 5; i++)  {
    for(let j = 4; j > i; j--)  {
      document.write('&nbsp');
    }
    for(let j = 0; j <= i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }