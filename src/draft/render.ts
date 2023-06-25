import { BlockInstance } from '../helpers/block';

// class Button extends Block {
//   constructor(props: ComponentProps) {
//     // Создаём враппер дом-элемент button
//     super('button', props);
//   }

//   render() {
//     // В проекте должен быть ваш собственный шаблонизатор
//     return `<div>${this.props.text}</div>`;
//   }
// }

export default function render(query: string, block: BlockInstance) {
  const root = document.querySelector(query);
  console.log(root);
  root!.appendChild(block.getContent()!);
  block.dispatchComponentDidMount();
  return root;
}

// const button = new Button({
//   text: 'Click me',
// });

// render('#app', button);

// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//   button.setProps({
//     text: 'Click me, please',
//   });
// }, 1000);
