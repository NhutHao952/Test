onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  const a = document.querySelector('.flowers');
  if(a){
    console.log('test nhánh mới')
  }