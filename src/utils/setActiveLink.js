function setActiveLink(e) {
  const currentElement = e.currentTarget;
  const parent = currentElement.parentElement;
  const siblings = [...parent.children];
  siblings.forEach((sibling) => {
    sibling.classList.remove('header-nav-link--active');
  });
  currentElement.classList.add('header-nav-link--active');
}

export { setActiveLink };
