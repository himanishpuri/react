function customRender(container, reactElement) {
  const element = document.createElement(reactElement.type);
  element.setAttribute('href', reactElement.props.href);
  element.setAttribute('target', reactElement.props.target);
  element.innerHTML = reactElement.children;

  container.appendChild(element);
};



const reactElement = {
  type : 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  children: 'This is a custom React Render',
};



const container = document.getElementById('root');

customRender(container, reactElement);