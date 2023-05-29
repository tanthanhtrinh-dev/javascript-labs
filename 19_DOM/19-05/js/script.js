(() => {
  let channelName = 'Easy Frontend';
  console.log('hello from 19-15', channelName);

  const liElementList = document.querySelectorAll('#todoList>li');
  if (liElementList) {
    for (const liElement of liElementList) {
      console.log(liElement);
    }
  }
})();
