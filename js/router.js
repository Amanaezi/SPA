const route = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
  };
  
  
  const routes = {
    404: "/pages/404.html",
    "/home": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
  };
  
  
  const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
  };
  
  
  window.onpopstate = handleLocation;
  window.route = route;
  
  
  handleLocation();
  
  
  document.querySelectorAll("#main-nav ul li a").forEach((a) => {
    a.addEventListener("click", route);
  });
  