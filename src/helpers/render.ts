import { BlockInstance } from './block';

export default function render(query: string, block: BlockInstance) {
  const root = document.querySelector(query);
  root!.appendChild(block.getContent()!);
  block.dispatchComponentDidMount();
  return root;
}
