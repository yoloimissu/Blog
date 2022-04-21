axios.get('https://v1.hitokoto.cn')
  .then(res => {
    let data = res.data
    var hitokotoText = document.getElementById('hitokotoText');
    var hitokotoFrom = document.getElementById('hitokotoFrom');
    hitokotoText.innerText = data.hitokoto;
    hitokotoFrom.innerText = '——【' + data.from + '】';
  })
  .catch(function (err) {
    console.error(err);
  })
