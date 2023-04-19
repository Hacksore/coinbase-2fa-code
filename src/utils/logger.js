// TODO Q6
const logHandler = (logs) => {

  let currentPromise = 0;
  
  try {
    for (let i = 0; i < logs.length; i++) {
      delay(1000)
          
    }
  } catch (e) {
    console.log('Whoops! logHandler() is broken 🙁')
  }
}

const delay = (t) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, t)
  });
}

export {
  logHandler
};
