const navbarRent=`<nav class ="navbar navbar-light bg-light justify-content-between" style="background-color: darkolivegreen">
  <a class ="navbar-brand" href="/home"> Home </a>
  <form class ="form-inline" method="post" action="/rent/search">
    <input class ="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search">
    <button class ="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>`
module.exports= navbarRent
