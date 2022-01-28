let links = [
    { linkName: 'Home', linkPath: 'index.html' },
    { linkName: 'About Us', linkPath: 'about.html' },
    { linkName: 'Services', linkPath: 'services.html' },
    { linkName: 'Products', linkPath: 'products.html' },
    { linkName: 'Contact', linkPath: 'contact.html' },
    { linkName: 'About Us', linkPath: 'about.html' },
    { linkName: 'Services', linkPath: 'services.html' },
    { linkName: 'Products', linkPath: 'products.html' },
    { linkName: 'ashdtasfhuydtafsytdfayustd', linkPath: 'products.html' }
]
let liItems = '';
for (i = 0; i < links.length; i++) {
    liItems += "<li><a href='" + links[i].linkPath + "'>" + links[i].linkName + "</a></li>";
    console.log(liItems);
}
document.getElementById("navigation").innerHTML = liItems;